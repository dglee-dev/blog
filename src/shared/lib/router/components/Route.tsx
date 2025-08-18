import React from "react";

import useRouter from "@/shared/lib/router/hooks/useRouter";
import { RouteProps } from "@/shared/lib/router/types/route-props";

const Route = ({
  path,
  element,
  children,
  index = false,
}: RouteProps) => {
  const { routePath } = useRouter();

  return <div>{children}</div>;
};

export default Route;
