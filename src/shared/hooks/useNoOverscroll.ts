import { useEffect } from "react";

const useNoOverscroll = (targetId: string) => {
  useEffect(() => {
    const el = document.getElementById(targetId);
    el?.classList.add("no-overscroll");
    return () => {
      el?.classList.remove("no-overscroll");
    };
  }, [targetId]);
};

export default useNoOverscroll;
