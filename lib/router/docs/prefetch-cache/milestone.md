# 구현 마일스톤

## 단계를 나누는 기준

각 단계가 독립적으로 동작 가능해야 하고, 이전 단계가 완료되어야 다음 단계를 진행할 수 있도록 의존성 순서를 따른다. 또한 단계마다 브라우저에서 결과를 확인할 수 있어야 한다.

---

## Milestone 1. PrefetchCacheContext 구현

`context/PrefetchCacheContext.tsx`와 `hooks/usePrefetchCache.ts`를 만든다.

이후 모든 것이 이 위에서 동작하기 때문에 가장 먼저 구현한다.

- **PrefetchCacheContext**: `Map<string, unknown>` 형태로 prefetch 결과를 들고 있는 React Context. `setPrefetchCache(key, value)`로 값을 저장하면 구독 중인 컴포넌트가 리렌더된다.
- **usePrefetchCache**: query key를 받아 PrefetchCacheContext에서 해당 값을 꺼내는 훅. 제네릭으로 타입을 지정할 수 있다.

**체크리스트**

- [x] `setPrefetchCache(key, value)` 호출 후 `usePrefetchCache(key)`가 같은 값을 반환
- [x] 캐시 값이 변경될 때 구독 중인 컴포넌트가 리렌더
- [x] 존재하지 않는 key로 `usePrefetchCache`를 호출하면 `undefined` 반환

---

## Milestone 2. Prefetch HOC 구현

`components/Prefetch.tsx`를 만든다. Intersection Observer로 viewport 진입을 감지하고, `fetcher()`를 실행해 결과를 PrefetchCacheContext에 저장한다.

**체크리스트**

- [x] `Prefetch`가 viewport에 진입하는 순간 Network 탭에서 fetch 요청 발생
- [x] viewport 밖에 있을 때는 fetch 실행 안 됨
- [x] fetch 완료 후 PrefetchCacheContext에 올바른 query key로 저장
- [x] 한 번 실행 후 Intersection Observer가 disconnect되어 중복 요청 없음

---

## Milestone 3. Nav에 Prefetch 적용

`Nav.tsx`의 `/posts` 링크를 `<Prefetch queryKey="posts" fetcher={fetchPosts}>` 로 감싼다.

**체크리스트**

- [ ] 페이지 최초 로드 시 Nav가 화면에 보이는 순간 prefetch 실행
- [ ] fetch 완료 후 PrefetchCacheContext에 올바른 query key로 저장

---

## Milestone 4. usePosts를 prefetchCache 기반으로 전환

`usePosts`에서 fetch 함수(`fetchPosts`)를 외부로 추출하고, `usePrefetchCache("posts")`를 먼저 확인한 뒤 없으면 fetch하도록 수정한다.

**체크리스트**

- [x] prefetchCache에 직접 값을 심어둔 상태에서 `/posts` 진입 시 Network 요청 없이 즉시 렌더링
- [x] prefetchCache가 비어있을 때 기존과 동일하게 fetch 실행
- [x] fetch 완료 후 결과가 prefetchCache에 저장 (이후 재진입 시 fetch 없이 렌더링)
- [ ] `/posts` 클릭 시 흰 화면 없이 즉시 렌더링
- [ ] 직접 URL로 `/posts` 진입 시 (prefetch 없이) 기존 fetch fallback 정상 동작
