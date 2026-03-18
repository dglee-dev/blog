/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, waitFor } from "@testing-library/react";

import { PrefetchCacheProvider } from "@lib/router/context/PrefetchCacheContext";
import usePrefetchCache from "@lib/router/hooks/usePrefetchCache";
import Prefetch from "@lib/router/components/Prefetch";

jest.mock("@/features/posts/api/fetchPosts", () =>
  jest.fn(() =>
    Promise.resolve([{ Key: "post-1", ETag: "abc", Size: 100 }])
  )
);

import fetchPosts from "@/features/posts/api/fetchPosts";

// IntersectionObserver stub
let intersectionCallback: (
  entries: { isIntersecting: boolean }[]
) => void;

beforeEach(() => {
  global.IntersectionObserver = class {
    constructor(
      callback: (
        entries: { isIntersecting: boolean }[]
      ) => void
    ) {
      intersectionCallback = callback;
    }
    observe() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
});

const TestConsumer = ({ queryKey }: { queryKey: string }) => {
  const data = usePrefetchCache(queryKey);
  return <div>{data ? JSON.stringify(data) : "empty"}</div>;
};

const renderWithProvider = () =>
  render(
    <PrefetchCacheProvider>
      <Prefetch queryKey="posts" fetcher={fetchPosts}>
        <span>POSTS</span>
      </Prefetch>
      <TestConsumer queryKey="posts" />
    </PrefetchCacheProvider>
  );

test("Nav가 화면에 보이는 순간 prefetch 실행 후 캐시에 저장", async () => {
  const { getByText } = renderWithProvider();

  expect(getByText("empty")).toBeTruthy();

  intersectionCallback([{ isIntersecting: true }]);

  await waitFor(() => {
    expect(fetchPosts).toHaveBeenCalledTimes(1);
    expect(
      getByText(
        JSON.stringify([{ Key: "post-1", ETag: "abc", Size: 100 }])
      )
    ).toBeTruthy();
  });
});
