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
      console.log("pop state occurred");
      setRoutePath(window.location.href);
    };

    window.addEventListener("popstate", handler);

    return window.removeEventListener(
      "popstate",
      handler
    );
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
