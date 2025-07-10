import { useEffect, useState } from "react";

const MOBILE_STANDARD_WIDTH = 480;

const useViewportType = () => {
  const [viewportType, setViewportType] =
    useState<null | "mobile" | "desktop">(null);

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth <= MOBILE_STANDARD_WIDTH
      ) {
        setViewportType("mobile");
      } else {
        setViewportType("desktop");
      }
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return {
    isMobile: viewportType === "mobile",
    isDesktop: viewportType === "desktop",
  };
};

export default useViewportType;
