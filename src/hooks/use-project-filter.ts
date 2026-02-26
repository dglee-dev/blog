import { useState, useEffect, useMemo } from "react";
import type { ProjectTag } from "@/data/projects";

export const useProjectFilter = () => {
  const [search, setSearch] = useState(window.location.search);

  useEffect(() => {
    const handlePopState = () => {
      setSearch(window.location.search);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const activeTags = useMemo(() => {
    const params = new URLSearchParams(search);
    return params.getAll("tag") as ProjectTag[];
  }, [search]);

  return { activeTags };
};
