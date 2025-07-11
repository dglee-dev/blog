import { createStore } from "zustand";

import { WorkItem } from "@/pages/works/types";
import { mapListId } from "@/shared/utils";
import { WithId } from "@/shared/types/utils";

const worksWithoutId: Array<
  Omit<WorkItem, "id">
> = [
  {
    name: "안동선 에디터 홈페이지",
    contents:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ratione quidem ex quis tempora ullam. Consequuntur quis soluta itaque harum. Aperiam, vel inventore. Modi iste beatae rerum quod quibusdam facilis sapiente velit assumenda perferendis earum nam voluptate voluptatem consectetur repellat maiores, itaque, vel mollitia voluptates blanditiis ab fugit, et quidem corrupti? Dolorem, commodi hic iste eum in quia. Recusandae tempore repellendus, doloremque quasi voluptatum, molestias libero reprehenderit modi dolor voluptates atque? Neque nulla quasi porro similique aperiam voluptas omnis doloribus atque rerum ut. Numquam culpa modi unde distinctio. Libero qui tenetur tempora voluptates saepe culpa accusamus quidem illum minima in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ratione quidem ex quis tempora ullam. Consequuntur quis soluta itaque harum. Aperiam, vel inventore. Modi iste beatae rerum quod quibusdam facilis sapiente velit assumenda perferendis earum nam voluptate voluptatem consectetur repellat maiores, itaque, vel mollitia voluptates blanditiis ab fugit, et quidem corrupti? Dolorem, commodi hic iste eum in quia. Recusandae tempore repellendus, doloremque quasi voluptatum, molestias libero reprehenderit modi dolor voluptates atque? Neque nulla quasi porro similique aperiam voluptas omnis doloribus atque rerum ut. Numquam culpa modi unde distinctio. Libero qui tenetur tempora voluptates saepe culpa accusamus quidem illum minima in!",
    thumbnail: {
      src: "/images/works/andongza/thumbnail.png",
      style: {
        fit: "cover",
        position: "center",
      },
    },
  },
  {
    name: "용담플레이",
    contents:
      "여기에는 아마도 커스텀 document model이..",
    thumbnail: {
      src: "/images/works/yongdam/thumbnail.png",
      style: {
        fit: "cover",
        position: "center",
      },
    },
  },
  {
    name: "선유동화",
    contents: "ㅎㅎ..",
    thumbnail: {
      src: "/images/works/seonyudo/thumbnail.png",
      style: {
        fit: "cover",
        position: "center",
      },
    },
  },
  {
    name: "성북마을 보물찾기",
    contents: "ㅎㅎ..",
    thumbnail: {
      src: "/images/works/seongbuk/thumbnail.jpg",
      style: {
        fit: "150%",
        position: "center 20%",
      },
    },
  },
  {
    name: "청주에 뜬 달",
    contents: "ㅎㅎ..",
    thumbnail: {
      src: "/images/works/cheongju/thumbnail2.png",
      style: {
        fit: "350%",
        position: "center",
      },
    },
  },
  {
    name: "메모리얼 타임큐브",
    contents: "ㅎㅎ..",
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
    name: "",
    contents: "",
    thumbnail: { src: "" },
  } as WorkItem,
  setSelectedWork: (work: WorkItem) =>
    set({ selectedWork: work }),
}));
