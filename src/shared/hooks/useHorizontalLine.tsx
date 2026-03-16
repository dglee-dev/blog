import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components/macro";

/**
 *
 * 가로선을 렌더링하는 ref와, 해당 선에 닿은 엘리먼트를 감지하는 훅.
 * IntersectionObserver의 rootMargin으로 감지 영역을 선의 y 위치로 좁혀서 구현.
 *
 * @example
 * const { lineRef, registerTarget, touchingIds } = useHorizontalLine();
 *
 * <HorizontalLine ref={lineRef} />
 * <div ref={registerTarget("item-1")}>...</div>
 *
 */
export function useHorizontalLine() {
  const lineRef = useRef<HTMLDivElement>(null);
  const targetsMap = useRef<
    Map<string, HTMLElement>
  >(new Map());
  const reverseMap = useRef<
    Map<HTMLElement, string>
  >(new Map());
  const observerRef =
    useRef<IntersectionObserver | null>(null);
  const touchingSet = useRef<Set<string>>(
    new Set(),
  );
  const [touchingIds, setTouchingIds] = useState<
    string[]
  >([]);

  const buildObserver = useCallback(() => {
    observerRef.current?.disconnect();
    touchingSet.current.clear();

    const line = lineRef.current;
    if (!line) return;

    const { top, height } =
      line.getBoundingClientRect();
    const vh = window.innerHeight;

    const topMargin = -Math.round(top);
    const bottomMargin = -(
      vh -
      Math.round(top) -
      height
    );

    observerRef.current =
      new IntersectionObserver(
        (entries) => {
          let changed = false;

          for (const entry of entries) {
            const id = reverseMap.current.get(
              entry.target as HTMLElement,
            );
            if (id == null) continue;

            if (
              entry.isIntersecting &&
              !touchingSet.current.has(id)
            ) {
              touchingSet.current.add(id);
              changed = true;
            } else if (
              !entry.isIntersecting &&
              touchingSet.current.has(id)
            ) {
              touchingSet.current.delete(id);
              changed = true;
            }
          }

          if (changed)
            setTouchingIds(
              Array.from(touchingSet.current),
            );
        },
        {
          rootMargin: `${topMargin}px 0px ${bottomMargin}px 0px`,
          threshold: 0,
        },
      );

    targetsMap.current.forEach((el) =>
      observerRef.current!.observe(el),
    );
  }, []);

  useEffect(() => {
    buildObserver();
    window.addEventListener(
      "resize",
      buildObserver,
    );

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener(
        "resize",
        buildObserver,
      );
    };
  }, [buildObserver]);

  const registerTarget = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      const prev = targetsMap.current.get(id);
      if (prev) {
        observerRef.current?.unobserve(prev);
        reverseMap.current.delete(prev);
      }

      if (el) {
        targetsMap.current.set(id, el);
        reverseMap.current.set(el, id);
        observerRef.current?.observe(el);
      } else {
        targetsMap.current.delete(id);
      }
    },
    [],
  );

  return { lineRef, registerTarget, touchingIds };
}

interface HorizontalLineProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  thickness?: number;
}

export const HorizontalLine = forwardRef<
  HTMLDivElement,
  HorizontalLineProps
>(
  (
    {
      color = "#ff1cff",
      thickness = 1,
      style,
      ...props
    },
    ref,
  ) => (
    <Line
      ref={ref}
      style={{
        borderTopColor: color,
        borderTopWidth: thickness,
        ...style,
      }}
      {...props}
    />
  ),
);

HorizontalLine.displayName = "HorizontalLine";

const Line = styled.div`
  width: 100%;
  border-top-style: solid;
  pointer-events: none;
`;
