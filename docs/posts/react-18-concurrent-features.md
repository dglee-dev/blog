---
title: React 18의 Concurrent 기능 살펴보기
date: 2024-03-15
tags: [react, concurrent, performance]
---

React 18에서 도입된 Concurrent 기능들은 UI의 반응성을 크게 개선해준다. 핵심은 렌더링을 중단하고 재개할 수 있는 능력이다.

## startTransition

`startTransition`은 특정 상태 업데이트를 낮은 우선순위로 처리하도록 표시한다. 사용자 입력처럼 즉각적인 응답이 필요한 업데이트는 높은 우선순위를 유지하면서, 무거운 렌더링은 뒤로 미룰 수 있다.

```tsx
import { startTransition } from 'react';

function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value); // 즉시 반영

    startTransition(() => {
      setResults(search(e.target.value)); // 낮은 우선순위
    });
  };

  return <input value={query} onChange={handleChange} />;
}
```

## useDeferredValue

`useDeferredValue`는 값의 업데이트를 지연시켜 UI가 버벅이지 않도록 한다. 특히 리스트 필터링이나 검색 결과 표시에 유용하다.

```tsx
function FilteredList({ query }) {
  const deferredQuery = useDeferredValue(query);
  const filteredItems = useMemo(
    () => filterItems(items, deferredQuery),
    [deferredQuery]
  );

  return <List items={filteredItems} />;
}
```

## Suspense 개선

React 18에서는 서버 사이드 렌더링에서도 Suspense를 완전히 지원한다. `Suspense` 경계 단위로 스트리밍이 가능해서, 느린 데이터 의존성이 있는 부분이 다른 부분의 렌더링을 블로킹하지 않는다.

이런 기능들을 조합하면 사용자가 체감하는 성능을 눈에 띄게 개선할 수 있다.
