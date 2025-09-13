import React from "react";

import { Path } from "@/shared/types/utils";

export function createRoutes(
  children: React.ReactNode
) {
  const childrenArray =
    React.Children.toArray(children);

  const routes = childrenArray.map(
    (child: any) => child.props
  );

  return {
    path: (window.location.pathname ??
      "/") as Path,
    children: [...routes],
  };
}
