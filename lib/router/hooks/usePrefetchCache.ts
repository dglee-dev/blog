import { usePrefetchCacheContext } from "@lib/router/context/PrefetchCacheContext";

const usePrefetchCache = <T>(key: string): T | undefined => {
  const { prefetchCache } = usePrefetchCacheContext();
  return prefetchCache.get(key) as T | undefined;
};

export default usePrefetchCache;
