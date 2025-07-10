import React, {
  createContext,
  useEffect,
  useState,
} from "react";

export const RoutePathContext = createContext<{
  routePath: string;
  setRoutePath: (path: string) => void;
}>({
  routePath: "",
  setRoutePath: () => {},
});

const Router = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [routePath, setRoutePath] = useState(
    window.location.pathname
  );

  useEffect(() => {
    const handler = () => {
      setRoutePath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);
  }, []);

  return (
    <RoutePathContext.Provider
      value={{
        routePath,
        setRoutePath,
      }}
    >
      {children}
    </RoutePathContext.Provider>
  );
};

export default Router;
