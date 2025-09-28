import React, { useEffect } from "react";

import { createRoutes } from "@/shared/lib/router/utils/create-routes";
import { buildBranches } from "@/shared/lib/router/utils/build-branches";

const useMatch = (children: React.ReactNode) => {
  useEffect(() => {
    const routes = createRoutes(children);

    console.log("route objects: ", routes);

    const branches = buildBranches(routes);

    console.log("route branches", branches);
  }, [children]);

  return null;
};

export default useMatch;
