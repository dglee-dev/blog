/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, waitFor, act } from "@testing-library/react";

import { PrefetchCacheProvider } from "@lib/router/context/PrefetchCacheContext";
import { usePrefetchCacheContext } from "@lib/router/context/PrefetchCacheContext";
import usePosts from "@/features/posts/hooks/usePosts";

jest.mock("@/features/posts/api/fetchPosts", () =>
  jest.fn(() =>
    Promise.resolve([{ Key: "post-1", ETag: "abc", Size: 100 }])
  )
);

import fetchPosts from "@/features/posts/api/fetchPosts";

beforeEach(() => {
  jest.clearAllMocks();
});

const TestConsumer = () => {
  const { posts } = usePosts();
  return (
    <div>
      {posts.length > 0 ? JSON.stringify(posts) : "empty"}
    </div>
  );
};

const CacheSetter = ({
  queryKey,
  value,
}: {
  queryKey: string;
  value: unknown;
}) => {
  const { setPrefetchCache } = usePrefetchCacheContext();
  React.useEffect(() => {
    setPrefetchCache(queryKey, value);
  }, []);
  return null;
};

test("prefetchCache에 값이 있으면 fetch 없이 즉시 반환", async () => {
  // 캐시 먼저 세팅
  const { rerender, getByText } = render(
    <PrefetchCacheProvider>
      <CacheSetter
        queryKey="posts"
        value={[{ Key: "prefetched", ETag: "xyz", Size: 50 }]}
      />
    </PrefetchCacheProvider>
  );

  await act(async () => {});

  // 캐시 세팅 후 consumer 마운트
  rerender(
    <PrefetchCacheProvider>
      <TestConsumer />
    </PrefetchCacheProvider>
  );

  expect(
    getByText(JSON.stringify([{ Key: "prefetched", ETag: "xyz", Size: 50 }]))
  ).toBeTruthy();
  expect(fetchPosts).not.toHaveBeenCalled();
});

test("prefetchCache가 비어있으면 fetch 실행 후 결과 반환", async () => {
  const { getByText } = render(
    <PrefetchCacheProvider>
      <TestConsumer />
    </PrefetchCacheProvider>
  );

  expect(getByText("empty")).toBeTruthy();

  await waitFor(() => {
    expect(fetchPosts).toHaveBeenCalledTimes(1);
    expect(
      getByText(JSON.stringify([{ Key: "post-1", ETag: "abc", Size: 100 }]))
    ).toBeTruthy();
  });
});
