---
title: 라우터를 직접 만들면 생기는 일들
date: 2024-11-03
tags: [router, spa, history-api]
---

React Router나 TanStack Router 없이 라우터를 직접 만들어보면 SPA가 어떻게 동작하는지 더 잘 이해하게 된다. History API가 핵심이다.

## History API 기초

브라우저의 `window.history`는 세션 기록을 탐색할 수 있는 API다. SPA 라우팅에 필요한 메서드는 두 가지다.

- `pushState(state, title, url)`: URL을 바꾸고 히스토리에 새 항목 추가
- `replaceState(state, title, url)`: 현재 항목을 교체 (뒤로 가기 스택에 쌓이지 않음)

그리고 뒤로 가기/앞으로 가기를 감지하려면 `popstate` 이벤트를 써야 한다.

## 최소한의 라우터

```ts
type Listener = (pathname: string) => void;

class Router {
  private listeners: Listener[] = [];

  get pathname() {
    return window.location.pathname;
  }

  navigate(path: string) {
    window.history.pushState(null, '', path);
    this.notify(path);
  }

  listen(fn: Listener) {
    this.listeners.push(fn);
    window.addEventListener('popstate', () => this.notify(this.pathname));
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  private notify(pathname: string) {
    this.listeners.forEach((fn) => fn(pathname));
  }
}

export const router = new Router();
```

## React와 연결하기

라우터를 React Context에 넣고 `useState`로 현재 경로를 추적하면 된다.

```tsx
function RouterProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    return router.listen(setPathname);
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, navigate: router.navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
```

## 직접 만들면 좋은 점

프레임워크 라우터는 많은 기능을 제공하지만 그만큼 복잡도도 높다. 단순한 SPA라면 직접 만든 라우터가 훨씬 가볍고, 동작을 정확히 이해한 채로 쓸 수 있다. 불필요한 추상화 없이 History API만으로도 충분한 경우가 많다.
