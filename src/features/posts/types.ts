export type PostPublish =
  | "public"
  | "draft"
  | "hidden";

export interface PostFrontmatter {
  title?: string;
  date?: Date | string;
  tags?: string[];
  publish?: PostPublish;
}
