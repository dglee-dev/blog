import { RouteObject } from "@/shared/lib/router/types/route-object";

export const buildResourceMap = (
  routes: RouteObject[]
) => {
  return routes.reduce((acc, route) => {
    if (route.children) {
      return {
        ...acc,
        ...buildResourceMap(route.children),
      };
    }

    acc[route.id] = route.element;

    return acc;
  }, new Map());
};
