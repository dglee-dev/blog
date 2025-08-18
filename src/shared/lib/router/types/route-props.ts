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
  children: React.ReactNode;
  index?: false;
}

export type RouteProps =
  | IndexRouteProps
  | LeafRouteProps
  | LayoutRouteProps;
