import React from "react";

import useMatch from "@lib/router/hooks/useMatch";

const Routes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const matchedRouteElement = useMatch(children);

  if (!matchedRouteElement)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        404: Has no matched Route
      </div>
    );

  return <>{matchedRouteElement}</>;
};

export default Routes;
