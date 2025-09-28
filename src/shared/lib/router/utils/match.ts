import React from "react";

export function createRoutes(
  children: React.ReactNode
) {
  const childrenArray =
    React.Children.toArray(children);

  const routes = childrenArray.map(
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
