/**
 * @jest-environment jsdom
 */

import {
  render,
  waitFor,
} from "@testing-library/react";
import Prefetch from "@lib/router/components/Prefetch";
import {
  PrefetchCacheProvider,
  usePrefetchCacheContext,
} from "@lib/router/context/PrefetchCacheContext";

let intersectionCallback: (
  entries: IntersectionObserverEntry[],
) => void;

beforeEach(() => {
  fetcher.mockClear();

  global.IntersectionObserver = class {
    constructor(
      callback: (
        entries: IntersectionObserverEntry[],
      ) => void,
    ) {
      intersectionCallback = callback;
    }
    observe() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});

const TestConsumer = ({
  queryKey,
}: {
  queryKey: string;
}) => {
  const { prefetchCache } =
    usePrefetchCacheContext();

  const value = prefetchCache.get(queryKey);

  return (
    <div>
      {value !== undefined
        ? JSON.stringify(value)
        : "empty"}
    </div>
  );
};

const fetcher = jest.fn(() =>
  Promise.resolve({ data: "prefetched" }),
);

const renderWithProvider = () =>
  render(
    <PrefetchCacheProvider>
      <Prefetch queryKey="test" fetcher={fetcher}>
        <span>link</span>
      </Prefetch>
      <TestConsumer queryKey="test" />
    </PrefetchCacheProvider>,
  );

test("viewport 밖에 있을 때는 fetch 실행 안 됨", () => {
  renderWithProvider();

  expect(fetcher).not.toHaveBeenCalled();
});

test("viewport 진입 시 fetcher 실행 후 캐시에 저장", async () => {
  const { getByText } = renderWithProvider();
  expect(getByText("empty")).toBeTruthy();

  // 뷰포트 진입하여 IntersectionObserver callback 호출
  intersectionCallback([
    {
      isIntersecting: true,
    } as IntersectionObserverEntry,
  ]);

  await waitFor(() => {
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(
      getByText('{"data":"prefetched"}'),
    ).toBeTruthy();
  });
});

test("이미 prefetch되어 캐시에 있으면 fetch하지 않는다", async () => {
  // 첫번째 렌더
  const { rerender, getByText } =
    renderWithProvider();

  // viewport 진입 → fetcher 실행 → 캐시에 저장
  intersectionCallback([
    {
      isIntersecting: true,
    } as IntersectionObserverEntry,
  ]);

  // prefetch된 데이터 소비 완료
  await waitFor(() => {
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(
      getByText('{"data":"prefetched"}'),
    ).toBeTruthy();
  });

  fetcher.mockClear();

  // Prefetch 언마운트
  rerender(
    <PrefetchCacheProvider>
      <TestConsumer queryKey="test" />
    </PrefetchCacheProvider>,
  );

  // 같은 queryKey로 Prefetch 다시 마운트
  // 캐시에 값이 있으므로 IntersectionObserver 자체가 생성되지 않음 → fetcher 호출하지 않음
  rerender(
    <PrefetchCacheProvider>
      <Prefetch queryKey="test" fetcher={fetcher}>
        <span>link</span>
      </Prefetch>
      <TestConsumer queryKey="test" />
    </PrefetchCacheProvider>,
  );

  expect(fetcher).not.toHaveBeenCalled();
});
