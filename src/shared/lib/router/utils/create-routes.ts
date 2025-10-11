import { RouteObject } from "@/shared/lib/router/types/route-object";
import { nanoid } from "nanoid";
import React from "react";

export function createRoutes(
  children: React.ReactNode
): RouteObject[] {
  const childrenArray =
    React.Children.toArray(children);

  const routes: RouteObject[] = childrenArray.map(
    (child: any) => {
      return child.props.children
        ? {
            id: nanoid(),
            ...child.props,
            children: createRoutes(
              child.props.children
            ),
          }
        : {
            id: nanoid(),
            ...child.props,
          };
    }
  );

  return routes;
}
