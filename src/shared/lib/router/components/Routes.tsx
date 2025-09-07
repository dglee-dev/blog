import React, { useEffect } from "react";

const Routes = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    console.log("Route children", children);
  }, [children]);

  return <div></div>;
};

export default Routes;
