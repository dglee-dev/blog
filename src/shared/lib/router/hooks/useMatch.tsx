import React, { useEffect } from "react";

import { createRoutes } from "@/shared/lib/router/utils/match";

const useMatch = (children: React.ReactNode) => {
  useEffect(() => {
    const routes = createRoutes(children);

    console.log(routes);
  }, [children]);

  return null;
};

export default useMatch;
