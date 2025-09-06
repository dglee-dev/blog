export type WorkItem = {
  id: string;
  slug: string;
  thumbnail: {
    src: string;
    style: {
      fit: "contain" | "cover" | `${string}%`;
      position: string;
    };
  };
};
