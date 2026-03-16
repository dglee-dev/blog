import React, {
  useEffect,
  useState,
} from "react";

import { createRoutes } from "@/shared/lib/router/utils/create-routes";
import { buildBranches } from "@/shared/lib/router/utils/build-branches";
import { tokenizeBranches } from "@/shared/lib/router/utils/tokenize-branches";
import { sortBranches } from "@/shared/lib/router/utils/sort-branches";
import { matchRoute } from "@/shared/lib/router/utils/match-route";
import { buildResourceMap } from "@/shared/lib/router/utils/build-resource-map";
import useRouter from "@/shared/lib/router/hooks/useRouter";
import { RouteObject } from "@/shared/lib/router/types/route-object";

const useMatch = (children: React.ReactNode) => {
  const [matchedElement, setMatchedElement] =
    useState(null);

  const { routePath: currentPath, navigate } =
    useRouter();

  useEffect(() => {
    const routes = createRoutes(children);

    const resourceMap = buildResourceMap(routes);
    const branches = buildBranches(routes);

    const tokenizedBranches =
      tokenizeBranches(branches);
    const sortedBranches = sortBranches(
      tokenizedBranches,
    );

    const matchedRoute = matchRoute(
      currentPath,
      sortedBranches,
    );

    if (!matchedRoute) {
      setMatchedElement(null);
      return;
    }

    const matchedElement: RouteObject =
      resourceMap[matchedRoute.branch.id];

    console.log(matchedElement);

    setMatchedElement(matchedElement);
  }, [children, currentPath]);

  return matchedElement;
};

export default useMatch;
