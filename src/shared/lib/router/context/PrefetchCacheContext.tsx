import React, {
  createContext,
  useContext,
  useState,
} from "react";

type PrefetchCache = Map<string, unknown>;

const PrefetchCacheContext = createContext<{
  prefetchCache: PrefetchCache;
  setPrefetchCache: (key: string, value: unknown) => void;
}>({
  prefetchCache: new Map(),
  setPrefetchCache: () => {},
});

export const PrefetchCacheProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [prefetchCache, setPrefetchCache] =
    useState<PrefetchCache>(new Map());

  const set = (key: string, value: unknown) => {
    setPrefetchCache((prev) =>
      new Map(prev).set(key, value),
    );
  };

  return (
    <PrefetchCacheContext.Provider
      value={{ prefetchCache, setPrefetchCache: set }}
    >
      {children}
    </PrefetchCacheContext.Provider>
  );
};

export const usePrefetchCacheContext = () =>
  useContext(PrefetchCacheContext);
