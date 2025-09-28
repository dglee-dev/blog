import React, { useEffect } from "react";

import { createRoutes } from "@/shared/lib/router/utils/create-routes";
import { buildBranches } from "@/shared/lib/router/utils/build-branches";
import { tokenizeBranches } from "@/shared/lib/router/utils/tokenize-branches";

const useMatch = (children: React.ReactNode) => {
  useEffect(() => {
    const routes = createRoutes(children);

    console.log("route objects: ", routes);

    const branches = buildBranches(routes);

    console.log("route branches", branches);

    const tokens = branches.map((branch) =>
      tokenizeBranches(
        branch.fullPath,
        branch.isIndex
      )
    );

    console.log("branch tokens: ", tokens);
  }, [children]);

  return null;
};

export default useMatch;
