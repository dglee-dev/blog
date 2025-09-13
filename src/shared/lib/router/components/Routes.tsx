import useMatch from "@/shared/lib/router/hooks/useMatch";
import React from "react";

const Routes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const matchedChild = useMatch(children);

  return <div></div>;
};

export default Routes;
