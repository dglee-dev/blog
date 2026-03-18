import { useContext } from "react";

import { RoutePathContext } from "@/shared/lib/router/components/Router";

const useRouter = () => {
  const { routePath, setRoutePath } = useContext(
    RoutePathContext
  );

  const navigate = (url: `/${string}`) => {
    window.history.pushState({}, "", url);
    setRoutePath(url);
  };

  return {
    routePath,
    navigate,
  };
};

export default useRouter;
