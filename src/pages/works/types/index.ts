export type WorkItem = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  thumbnail: {
    src: string;
    style: {
      fit: "contain" | "cover" | `${string}%`;
      position: string;
    };
  };
};
