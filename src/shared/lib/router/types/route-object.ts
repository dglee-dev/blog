interface IndexRouteProps {
  id: string;
  index: true;
  element: React.ReactNode;
  path?: never;
  children?: never;
}

interface LeafRouteProps {
  id: string;
  path: string;
  element: React.ReactNode;
  index?: false;
  children?: never;
}

interface LayoutRouteProps {
  id: string;
  path?: string;
  element?: React.ReactNode;
  children: RouteObject[];
  index?: false;
}

export type RouteObject =
  | IndexRouteProps
  | LeafRouteProps
  | LayoutRouteProps;
