interface IndexRouteProps {
  index: true;
  element: React.ReactNode;
  path?: never;
  children?: never;
}

interface LeafRouteProps {
  path: string;
  element: React.ReactNode;
  index?: false;
  children?: never;
}

interface LayoutRouteProps {
  path?: string;
  element?: React.ReactNode;
  children: RouteObject[];
  index?: false;
}

export type RouteObject =
  | IndexRouteProps
  | LeafRouteProps
  | LayoutRouteProps;
