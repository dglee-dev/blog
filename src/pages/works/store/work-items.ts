import { createStore } from "zustand";

import { WorkItem } from "@/pages/works/types";
import { mapListId } from "@/shared/utils";
import { WithId } from "@/shared/types/utils";

const worksWithoutId: Array<
  Omit<WorkItem, "id">
> = [
  {
    name: "안동선 에디터 홈페이지",
    contents: "....",
    thumbnail:
      "/images/works/andongza/thumbnail.png",
  },
  {
    name: "용담플레이",
    contents:
      "여기에는 아마도 커스텀 document model이..",
    thumbnail:
      "/images/works/yongdam/thumbnail.png",
  },
];

export const workItemStore = createStore<{
  works: Array<WithId<WorkItem>>;
  selectedWork: WorkItem;
  setSelectedWork: (work: WorkItem) => void;
}>((set) => ({
  works: mapListId<Omit<WorkItem, "id">>(
    worksWithoutId
  ),
  selectedWork: {
    name: "",
    contents: "",
    thumbnail: "",
  } as WorkItem,
  setSelectedWork: (work: WorkItem) =>
    set({ selectedWork: work }),
}));
