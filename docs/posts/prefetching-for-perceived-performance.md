---
title: Prefetch로 체감 성능 올리기
date: 2024-08-10
tags: [performance, prefetch, ux]
description: |
  실제 로딩 시간을 줄이는 것과 사용자가 느끼는 빠름은 다른 문제다.
  Prefetch는 사용자가 요청하기 전에 미리 데이터를 가져와서 체감 성능을 높이는 기법이다.
---

## 언제 Prefetch할까

핵심은 사용자의 다음 행동을 예측하는 것이다. 몇 가지 신호를 활용할 수 있다.

- **Hover**: 링크에 마우스를 올리는 순간 (약 100~200ms의 여유가 생긴다)
- **Viewport 진입**: IntersectionObserver로 요소가 화면에 보일 때
- **Idle time**: `requestIdleCallback`으로 브라우저 여유 시간에 처리

```ts
function usePrefetchOnHover(fetcher: () => Promise<unknown>) {
  const cache = useRef<unknown>(null);

  const prefetch = useCallback(() => {
    if (cache.current) return;
    fetcher().then((data) => {
      cache.current = data;
    });
  }, [fetcher]);

  return { prefetch, cached: cache.current };
}
```

## IntersectionObserver 기반 구현

링크가 뷰포트에 들어올 때 prefetch하는 방식이 더 공격적이지만, 사용자 행동 예측 정확도가 높다.

```tsx
function Prefetch({ children, fetcher, queryKey }) {
  const ref = useRef<HTMLDivElement>(null);
  const { setPrefetchCache } = usePrefetchCacheContext();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetcher().then((data) => setPrefetchCache(queryKey, data));
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
```

## 캐시 전략

Prefetch한 데이터는 적절히 캐싱해야 한다. 같은 데이터를 중복으로 fetch하지 않도록 하고, 데이터가 너무 오래되지 않도록 TTL을 설정하는 것이 좋다.

React의 Context나 전역 상태에 저장하면 컴포넌트 트리 전체에서 접근할 수 있어 편리하다. 이 블로그도 비슷한 방식으로 포스트 목록을 미리 가져온다.
