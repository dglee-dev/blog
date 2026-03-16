import { useEffect } from "react";

export const useWorkHash = (
  selectedSlug: string | undefined,
) => {
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      document
        .getElementById(hash)
        ?.scrollIntoView({ block: "center" });
    }
  }, []);

  useEffect(() => {
    if (selectedSlug) {
      history.replaceState(
        null,
        "",
        `#${selectedSlug}`,
      );
    } else {
      history.replaceState(
        null,
        "",
        location.pathname,
      );
    }
  }, [selectedSlug]);
};
