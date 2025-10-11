import React from "react";

import useMatch from "@/shared/lib/router/hooks/useMatch";

const Routes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const matchedRouteElement = useMatch(children);

  return <>{matchedRouteElement}</>;
};

export default Routes;
