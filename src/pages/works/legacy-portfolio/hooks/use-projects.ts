import { useMemo } from "react";
import projects from "../data/projects";
import { useProjectFilter } from "./use-project-filter";

const useProjects = () => {
  const { activeTags, sortTags } = useProjectFilter();

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (activeTags.length > 0) {
      result = result.filter((project) =>
        activeTags.some((tag) => project.tags.includes(tag))
      );
    }

    if (sortTags.length > 0) {
      result = [...result].sort((a, b) => {
        const aScore = sortTags.filter((tag) => a.tags.includes(tag)).length;
        const bScore = sortTags.filter((tag) => b.tags.includes(tag)).length;
        return bScore - aScore;
      });
    }

    return result;
  }, [activeTags, sortTags]);

  return { projects: filteredProjects, activeTags, sortTags };
};

export default useProjects;
