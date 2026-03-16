export type WorkItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: {
    src: string;
    style: {
      fit: "contain" | "cover" | `${string}%`;
      position: string;
    };
  };
};
