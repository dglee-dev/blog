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
        const score = (tags: typeof a.tags) =>
          sortTags.reduce(
            (acc, tag, i) =>
              tags.includes(tag) ? acc + (sortTags.length - i) : acc,
            0
          );
        return score(b.tags) - score(a.tags);
      });
    }

    return result;
  }, [activeTags, sortTags]);

  return { projects: filteredProjects, activeTags, sortTags };
};

export default useProjects;
