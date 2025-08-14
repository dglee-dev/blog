import { Nullable } from "@/shared/types/utils";
import { useEffect, useState } from "react";

type Viewport = "mobile" | "desktop";

const useViewport = () => {
  const [viewport, setViewport] =
    useState<Nullable<Viewport>>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 480;

    const viewport = isMobile
      ? "mobile"
      : "desktop";

    setViewport(viewport);
  }, []);

  return {
    viewport,
  };
};

export default useViewport;
