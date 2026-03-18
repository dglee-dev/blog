import { chain, trimEnd, trim } from "lodash";

import { RouteBranch } from "@/shared/lib/router/types/route-branch";
import { RouteObject } from "@/shared/lib/router/types/route-object";

export function buildBranches(
  routeObjects: RouteObject[],
  base = "/"
): RouteBranch[] {
  // DFS on routeObjects and generate fullpath as joining paths of parents' and childs'
  const branches: RouteBranch[] = [];

  let order = 0;

  function walk(
    route: RouteObject,
    accumulatedPath: string,
    parentId: string
  ) {
    if (route.index) {
      order++;

      branches.push({
        fullPath: accumulatedPath,
        isIndex: true,
        order,
        id: route.id,
        parentId,
      });

      return;
    }

    const hasChild =
      route.children && route.children.length > 0;

    const fullPath = route.path
      ? joinUrl(accumulatedPath, route.path)
      : accumulatedPath;

    if (!hasChild) {
      order++;

      branches.push({
        fullPath,
        isIndex: false,
        order,
        id: route.id,
        parentId,
      });

      return;
    }

    const newParentId = route.id;
    return route.children.forEach((child) =>
      walk(child, fullPath, newParentId)
    );
  }

  for (const route of routeObjects) {
    walk(route, base, "root");
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
