import { useEffect, useState } from "react";

const useViewportType = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 480,
  );

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener(
        "resize",
        handler,
      );
    };
  }, []);

  return {
    isMobile,
  };
};

export default useViewportType;
