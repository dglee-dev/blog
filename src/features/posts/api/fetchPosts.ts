import matter from "gray-matter";

export interface PostObject {
  Key: string;
  title: string;
  date: string;
  tags: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = (require as any).context("../../../../docs/posts", false, /\.md$/);

const isDev = process.env.NODE_ENV === "development";

const isVisible = (publish: string | undefined): boolean => {
  if (publish === "hidden") return false;
  if (publish === "draft") return isDev;
  return true; // public or undefined
};

const fetchPosts = (): Promise<PostObject[]> => {
  const posts: PostObject[] = ctx.keys().flatMap((key: string) => {
    const raw = ctx(key) as string;
    const { data } = matter(raw);
    if (!isVisible(data.publish)) return [];
    const filename = key.replace("./", "");
    return [{
      Key: `posts/${filename}`,
      title: data.title ?? filename.replace(".md", ""),
      date: data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : data.date ? String(data.date).slice(0, 10) : "",
      tags: data.tags ?? [],
    }];
  });

  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return Promise.resolve(posts);
};

export default fetchPosts;
