import { createStore } from "zustand";

import { WorkItem } from "@/pages/works/types";
import { mapListId } from "@/shared/utils";
import { WithId } from "@/shared/types/utils";

const worksWithoutId: Array<
  Omit<WorkItem, "id">
> = [
  {
    slug: "andongza-works",
    title: "Andongza Works",
    description: "",
    thumbnail: {
      src: "/images/works/andongza/thumb.png",
      style: {
        fit: "80%",
        position: "50% 50%",
      },
    },
  },
  {
    slug: "yongdam-play",
    title: "Yongdam Play",
    description: "",
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
    title: "Seonyu Dongwha",
    description: "",
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
    title: "SB Treasure",
    description: "",
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
    title: "Moon Over Cheongju",
    description: "",
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
    title: "Memorial Timecube",
    description: "",
    thumbnail: {
      src: "/images/works/korea-memorial/thumbnail.jpg",
      style: {
        fit: "200%",
        position: "center 45%",
      },
    },
  },
  {
    slug: "gardening",
    title: "Gardening",
    description: "",
    thumbnail: {
      src: "/images/works/piknic-gardening/gardening.png",
      style: {
        fit: "200%",
        position: "25% 20%",
      },
    },
  },
  {
    slug: "dadada",
    title: "Dadada",
    description: "",
    thumbnail: {
      src: "/images/works/dadada/dadada.png",
      style: {
        fit: "120%",
        position: "center",
      },
    },
  },
  {
    slug: "rebel9-services",
    title: "Rebel9 Services",
    description: "",
    thumbnail: {
      src: "/images/works/rebel9-services/thumb.png",
      style: {
        fit: "260%",
        position: "top left",
      },
    },
  },
  {
    slug: "opticalme",
    title: "OpticalMe",
    description: "",
    thumbnail: {
      src: "/images/works/opticalme/thumb.png",
      style: {
        fit: "100%",
        position: "center",
      },
    },
  },
  {
    slug: "chopsticks",
    title: "Chopsticks",
    description: "",
    thumbnail: {
      src: "/images/works/chopsticks/thumb.png",
      style: {
        fit: "160%",
        position: "30% 16%",
      },
    },
  },
  {
    slug: "wordie",
    title: "Wordie",
    description: "",
    thumbnail: {
      src: "/images/works/wordie/thumb.png",
      style: {
        fit: "180%",
        position: "44% 50%",
      },
    },
  },
  {
    slug: "vanilla-portal",
    title: "Vanilla Portal",
    description: "",
    thumbnail: {
      src: "/images/works/vanilla-portal/thumb.png",
      style: {
        fit: "100%",
        position: "top left",
      },
    },
  },
  {
    slug: "piknic-leiter",
    title: "Piknic Leiter",
    description: "",
    thumbnail: {
      src: "/images/works/piknic-leiter/thumb.jpg",
      style: {
        fit: "320%",
        position: "49% 35%",
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
    worksWithoutId,
  ),
  selectedWork: {
    slug: "",
    thumbnail: { src: "" },
  } as WorkItem,
  setSelectedWork: (work: WorkItem) =>
    set({ selectedWork: work }),
}));
