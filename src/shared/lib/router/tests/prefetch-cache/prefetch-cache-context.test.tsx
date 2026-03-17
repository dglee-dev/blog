/**
 * @jest-environment jsdom
 */

import {
  render,
  screen,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import {
  PrefetchCacheProvider,
  usePrefetchCacheContext,
} from "@/shared/lib/router/context/PrefetchCacheContext";
import usePrefetchCache from "@/shared/lib/router/hooks/usePrefetchCache";

const TestConsumer = ({
  queryKey,
}: {
  queryKey: string;
}) => {
  const value =
    usePrefetchCache<string>(queryKey);
  return <div>{value ?? "undefined"}</div>;
};

const TestSetter = ({
  queryKey,
  value,
}: {
  queryKey: string;
  value: string;
}) => {
  const { setPrefetchCache } =
    usePrefetchCacheContext();

  return (
    <button
      onClick={() =>
        setPrefetchCache(queryKey, value)
      }
    >
      set
    </button>
  );
};

const setup = (queryKey: string, value: string) =>
  render(
    <PrefetchCacheProvider>
      <TestSetter
        queryKey={queryKey}
        value={value}
      />
      <TestConsumer queryKey={queryKey} />
    </PrefetchCacheProvider>,
  );

test("setPrefetchCache 호출 후 usePrefetchCache가 같은 값을 반환", async () => {
  const { getByText } = setup("posts", "hello");

  expect(
    getByText("undefined"),
  ).toBeInTheDocument();

  await act(async () => {
    getByText("set").click();
  });

  expect(getByText("hello")).toBeInTheDocument();
});

test("존재하지 않는 key로 usePrefetchCache를 호출하면 undefined 반환", () => {
  render(
    <PrefetchCacheProvider>
      <TestConsumer queryKey="nonexistent" />
    </PrefetchCacheProvider>,
  );

  expect(
    screen.getByText("undefined"),
  ).toBeInTheDocument();
});
