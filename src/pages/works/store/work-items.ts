import { createStore } from "zustand";

import { WorkItem } from "@/pages/works/types";
import { mapListId } from "@/shared/utils";
import { WithId } from "@/shared/types/utils";

const worksWithoutId: Array<
  Omit<WorkItem, "id">
> = [
  {
    slug: "andongza-works",
    thumbnail: {
      src: "/images/works/andongza/thumbnail.png",
      style: {
        fit: "cover",
        position: "center",
      },
    },
  },
  {
    slug: "yongdam-play",
    thumbnail: {
      src: "/images/works/yongdam/thumbnail.png",
      style: {
        fit: "cover",
        position: "center",
      },
    },
  },
  {
    slug: "seonyu-dongwha",
    thumbnail: {
      src: "/images/works/seonyudo/thumbnail.png",
      style: {
        fit: "cover",
        position: "center",
      },
    },
  },
  {
    slug: "sb-treasure",
    thumbnail: {
      src: "/images/works/seongbuk/thumbnail.jpg",
      style: {
        fit: "150%",
        position: "center 20%",
      },
    },
  },
  {
    slug: "moon-over-cheongju",
    thumbnail: {
      src: "/images/works/cheongju/thumbnail2.png",
      style: {
        fit: "350%",
        position: "center",
      },
    },
  },
  {
    slug: "memorial-timecube",
    thumbnail: {
      src: "/images/works/korea-memorial/thumbnail.jpg",
      style: {
        fit: "130%",
        position: "center 82%",
      },
    },
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
    slug: "",
    thumbnail: { src: "" },
  } as WorkItem,
  setSelectedWork: (work: WorkItem) =>
    set({ selectedWork: work }),
}));
