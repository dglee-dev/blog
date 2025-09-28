import { chain, trimEnd, trim } from "lodash";

import { RouteBranch } from "@/shared/lib/router/types/route-branch";
import { RouteObject } from "@/shared/lib/router/types/route-object";

export function buildBranches(
  routeObjects: RouteObject[],
  base = "/"
): RouteBranch[] {
  // DFS on routeObjects and generate fullpath as joining paths of parents' and childs'

  const branches: RouteBranch[] = [];

  function walk(
    route: RouteObject,
    accumulatedPath: string
  ) {
    if (route.index) {
      branches.push({
        fullPath: accumulatedPath,
        isIndex: true,
      });

      return;
    }

    const hasChild =
      route.children && route.children.length > 0;

    const fullPath = route.path
      ? joinUrl(accumulatedPath, route.path)
      : accumulatedPath;

    if (!hasChild) {
      branches.push({
        fullPath,
        isIndex: false,
      });

      return;
    }

    return route.children.forEach((child) =>
      walk(child, fullPath)
    );
  }

  for (const route of routeObjects) {
    walk(route, base);
  }

  return branches;
}

function joinUrl(...parts) {
  return chain(parts)
    .map((part, index) => {
      if (index === 0) {
        return trimEnd(part, "/");
      }

      return trim(part, "/");
    })
    .filter(Boolean)
    .join("/")
    .value();
}
