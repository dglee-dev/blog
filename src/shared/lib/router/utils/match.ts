import { RouteObject } from "@/shared/lib/router/types/route-object";
import React from "react";

export function createRoutes(
  children: React.ReactNode
) {
  const childrenArray =
    React.Children.toArray(children);

  const routes: RouteObject[] = childrenArray.map(
    (child: any) => {
      return child.props.children
        ? {
            ...child.props,
            children: createRoutes(
              child.props.children
            ),
          }
        : child.props;
    }
  );

  return routes;
}
