export type WorkItem = {
  id: string;
  name: string;
  contents: string;
  thumbnail: {
    src: string;
    style: {
      fit: "contain" | "cover" | `${string}%`;
      position: string;
    };
  };
};
