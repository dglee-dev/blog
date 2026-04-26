import matter from "gray-matter";
import type {
  PostFrontmatter,
  PostPublish,
} from "../types";

export interface PostObject {
  Key: string;
  title: string;
  date: string;
  tags: string[];
}

const ctx = (require as any).context(
  "../../../../docs/posts",
  false,
  /\.md$/,
);

const isDev =
  process.env.NODE_ENV === "development";

const isVisible = (
  publish: PostPublish | undefined,
): boolean => {
  if (publish === "hidden") return false;
  if (publish === "draft") return isDev;
  return true; // public or undefined
};

const toDateStr = (date: unknown): string => {
  if (date instanceof Date)
    return date.toISOString().slice(0, 10);
  if (date) return String(date).slice(0, 10);
  return "";
};

const fetchPosts = (): Promise<PostObject[]> => {
  const posts: PostObject[] = ctx
    .keys()
    .flatMap((key: string) => {
      const raw = ctx(key) as string;

      const { data } = matter(raw);
      const frontmatter = data as PostFrontmatter;

      if (!isVisible(frontmatter.publish)) return [];

      const filename = key.replace("./", "");
      const {
        title = filename.replace(".md", ""),
        date,
        tags = [],
      } = frontmatter;

      return [
        {
          Key: `posts/${filename}`,
          title,
          date: toDateStr(date),
          tags,
        },
      ];
    });

  posts.sort((a, b) =>
    a.date > b.date ? -1 : 1,
  );

  return Promise.resolve(posts);
};

export default fetchPosts;
