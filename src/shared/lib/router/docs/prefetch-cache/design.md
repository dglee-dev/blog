# Prefetch & Cache 설계 문서

## 목적

`/posts` 진입 시 Lambda fetch가 완료되기 전까지 흰 화면이 보이는 문제를 해결하기 위해 Router cache를 설계.

`Prefetch` 컴포넌트가 viewport에 진입하는 순간 전달받은 fetcher를 prefetching하여 데이터를 캐싱해두고, 실제 라우트 진입 시 캐싱된 데이터를 사용하여 즉시 렌더링한다.

```tsx
// 사용 예시
const fetchPosts = () =>
  fetch("https://lambda-url/...").then((r) =>
    r.json(),
  );

<Prefetch queryKey="posts" fetcher={fetchPosts}>
  <a onClick={() => router.navigate("/posts")}>
    Posts
  </a>
</Prefetch>;
```

링크가 화면에 보이는 순간 `fetchPosts`가 실행되고 결과가 `"posts"` 키로 CacheContext에 저장된다.
이후 `/posts`로 진입하면 `usePosts`가 `useCache("posts")`로 즉시 데이터를 읽어 흰 화면 없이 렌더링한다.

## 설계에 이르기까지

흰 화면 문제를 해결하는 방법으로 SSR을 먼저 고려했다. Lambda에서 HTML을 렌더링해 내려주면 fetch 전에도 화면이 보이기 때문이다. 하지만 지금 스택(순수 SPA)에서 SSR을 붙이려면 인프라 구조 자체를 바꿔야 하고, 라우트 이동마다 공통 레이아웃까지 깜빡이는 문제도 생긴다.

**그런데, 로딩 없이 페이지가 나타나는 사용자 경험 측면에서는 SSR보다 prefetch가 더 유효하다는 것을 깨달았다.** 라우트 진입 전에 데이터를 미리 fetch해두면 흰 화면 없이 즉시 렌더링할 수 있다. Next.js가 좋은 사용자 경험을 제공하는 것은 서버사이드 렌더링 때문이 아니라 prefetch 때문이라는 것을 알았고, React Router를 사용하면 클라이언트 사이드 렌더링을 유지하면서도 prefetching을 구현할 수 있다는 것을 알게되었다.

prefetch에 대한 설계를 시작하면서 "prefetch 결과를 어디에 두고, 어떻게 컴포넌트까지 전달하냐"는 고민이 생겼다. React Router는 loader를 라우터에 등록하고 라우터가 직접 컴포넌트에 주입하는 방식으로 이 문제를 해결한다. 우리 라우터에 같은 인터페이스를 구현하는 것도 고려했지만, 라우터가 데이터 레이어까지 책임지는 구조로 커지는 비용이 컸다.

react-query를 붙이면 캐시, prefetch, 로딩 상태를 한 번에 해결할 수 있다는 생각도 했다. 하지만 외부 라이브러리에 의존하지 않고 직접 구현하는 방향을 택했다.

결국 "라우터가 데이터를 주입하지 않아도, `Prefetch`와 데이터 훅이 query key라는 공통 계약으로 연결되면 된다"는 아이디어에 도달했다. `Prefetch`가 viewport 진입 시 fetch하고 CacheContext에 query key로 저장하면, 데이터 훅은 같은 query key로 캐시를 구독하면 된다. 라우터를 건드리지 않고, react-query 없이, react-query와 유사한 구조를 직접 구현하는 설계다.

---

## 설계

### Layer 1. Prefetch 인터페이스

prefetch 로직을 어떤 형태로 노출할 것인가.

**선택: HOC `<Prefetch>`**
"이 영역이 보이면 prefetch한다"는 의도가 코드에서 명확히 읽힘. navigate 로직과 섞이지 않아 각자 단독으로 교체 가능.

```tsx
<Prefetch queryKey="posts" fetcher={fetchPosts}>
  <a onClick={() => router.navigate("/posts")}>
    Posts
  </a>
</Prefetch>
```

그 외 선택지:

- **Link 컴포넌트**: navigate + prefetch를 하나로 묶어 사용이 간편하지만 prefetch를 원하지 않더라도 기본적으로 적용되는 것을 원하지 않음. prefetch 의도를 더 명확히 드러내는 것이 좋음
- **`useLink` 훅**: ref + onClick을 반환하는 구조라 Intersection Observer 로직을 훅 내부에 깔끔하게 숨기기 어렵고, HOC보다 선언적이지 않음
- **`router.prefetch()` 메서드만**: 가장 단순하지만 Intersection Observer 로직이 호출부마다 흩어짐

---

### Layer 2. 캐시 저장 위치

prefetch 결과를 어디에 보관할 것인가.

**선택: CacheContext (React Context)**
캐시 데이터가 바뀔 때 React 리렌더와 연동되어야 하고, `useCache(queryKey)` 훅으로 컴포넌트가 자연스럽게 구독할 수 있음. 또한 `Prefetch`가 CacheContext에 저장하고 `usePosts`가 query key로 꺼내는 구조가 명확하게 분리됨.

이 설계는 라우터가 데이터를 컴포넌트에 주입하는 복잡한 인터페이스 없이도, query key라는 단순한 계약으로 `Prefetch`와 데이터 훅을 연결한다는 아이디어에서 출발함. react-query의 구조와 유사하면서도 직접 구현하는 방향.

그 외 선택지:

- **모듈 레벨 싱글턴**: `const cache = new Map()`을 파일 상단에 선언. import만으로 어디서든 접근 가능하고 구현이 단순함. React 렌더링과 연동되지 않고 테스트 시 모듈 초기화 순서를 주의해야 함
- **Router 내부 useRef**: Router 컴포넌트가 ref로 캐시를 보유. 라우터와 캐시가 같은 레이어에 있지만, 외부에서 접근하려면 useRouter를 통해야 하고 렌더링 연동이 안 됨

**참고 - Next.js App Router**: reducer 패턴으로 라우터 전체 상태(경로, 캐시, prefetch 결과)를 하나의 state 트리로 관리. 캐시는 그 트리의 일부.

**참고 - React Router**: loader를 라우트에 등록하고 라우터가 전환 전에 실행해 결과를 컴포넌트에 주입. 별도 캐시 레이어 없이 라우터 상태에 일시적으로 보관. 우리 구조에서 동일하게 구현하려면 라우터가 데이터 레이어까지 책임져야 해서 복잡도가 높음.

---

### Layer 3. 캐시 접근 방식

데이터 훅(usePosts 등)이 캐시를 어떻게 읽을 것인가.

**선택: `useCache(queryKey)`로 직접 구독**
CacheContext를 구독하는 훅을 통해 query key로 데이터를 읽음. 캐시가 채워지는 순간 리렌더가 트리거되어 즉시 반영됨.

```ts
const cached = useCache<PostObject[]>("posts");
if (cached) return { posts: cached };
// 없으면 fetch 후 CacheContext에 저장
```

그 외 선택지:

- **라우터가 props로 주입**: 라우터가 캐시를 확인하고 페이지 컴포넌트에 전달. 훅이 캐시를 몰라도 되지만 라우터 구조를 대폭 변경해야 함

---

## 최종 구현

### 신규 파일

**`context/CacheContext.tsx`**

- `Map<string, unknown>` 형태로 캐시 보관
- `setCache(queryKey, data)`, `getCache(queryKey)` 제공
- 캐시 변경 시 리렌더 트리거

**`hooks/useCache.ts`**

- CacheContext를 구독
- query key로 데이터 반환

**`components/Prefetch.tsx`**

- Intersection Observer로 자식 요소의 viewport 진입 감지
- 진입 시 `fetcher()` 실행 → `setCache(queryKey, result)`
- 한 번 실행 후 observer disconnect

### 수정 파일

**`src/pages/posts/hooks/usePosts.tsx`**

- fetch 함수를 훅 외부로 추출 (`fetchPosts`)
- `useCache<PostObject[]>("posts")` 먼저 확인, 있으면 즉시 반환
- 없으면 `fetchPosts()` 실행 후 `setCache` 저장

**`src/components/Nav.tsx`**

- `/posts` 링크를 `<Prefetch queryKey="posts" fetcher={fetchPosts}>` 로 감싸기

### 수정 대상 파일 요약

- `src/shared/lib/router/context/CacheContext.tsx` — 신규
- `src/shared/lib/router/hooks/useCache.ts` — 신규
- `src/shared/lib/router/components/Prefetch.tsx` — 신규
- `src/pages/posts/hooks/usePosts.tsx` — fetch 함수 추출, 캐시 우선 조회
- `src/components/Nav.tsx` — Prefetch 적용
