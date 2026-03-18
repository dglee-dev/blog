import { useContext, useMemo } from "react";
import {
  ParamsContext,
  RouteParams,
} from "@/shared/lib/router/context/ParamsContext";

/**
 * useParams hook
 * Returns current matched route params. Generic allows narrowing to a specific shape.
 * If no provider exists above, returns an empty object (so consumers can destructure safely).
 */
function useParams<
  T extends RouteParams = RouteParams
>(): T {
  const ctx = useContext(ParamsContext);
  // stabilize empty object reference to avoid rerenders
  return useMemo(
    () => (ctx ?? ({} as RouteParams)) as T,
    [ctx]
  );
}

export default useParams;
