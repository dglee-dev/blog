import React, { useEffect, useRef } from "react";

import { usePrefetchCacheContext } from "@lib/router/context/PrefetchCacheContext";

interface PrefetchProps {
  queryKey: string;
  fetcher: () => Promise<unknown>;
  children: React.ReactNode;
}

const Prefetch = ({
  queryKey,
  fetcher,
  children,
}: PrefetchProps) => {
  const { prefetchCache, setPrefetchCache } =
    usePrefetchCacheContext();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefetchCache.has(queryKey)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();

          console.log(`[prefetch] start: ${queryKey}`);
          const startedAt = Date.now();

          fetcher().then((result) => {
            console.log(`[prefetch] done: ${queryKey} (${Date.now() - startedAt}ms)`);
            setPrefetchCache(queryKey, result);
          });
        }
      },
    );

    if (ref.current)
      observer.observe(ref.current);

    return () => observer.disconnect();
  }, [queryKey]);

  return (
    <>
      <span ref={ref} />
      {children}
    </>
  );
};

export default Prefetch;
