import { useMemo } from "react";
import projects from "@/data/projects";
import { useProjectFilter } from "@/hooks/use-project-filter";

const useProjects = () => {
  const { activeTags } = useProjectFilter();

  const filteredProjects = useMemo(() => {
    if (activeTags.length === 0) return projects;
    return projects.filter((project) =>
      activeTags.some((tag) => project.tags.includes(tag))
    );
  }, [activeTags]);

  return { projects: filteredProjects, activeTags };
};

export default useProjects;
