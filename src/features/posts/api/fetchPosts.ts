import matter from "gray-matter";

export interface PostObject {
  Key: string;
  title: string;
  date: string;
  tags: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = (require as any).context("../../../../docs/posts", false, /\.md$/);

const fetchPosts = (): Promise<PostObject[]> => {
  const posts: PostObject[] = ctx.keys().map((key: string) => {
    const raw = ctx(key) as string;
    const { data } = matter(raw);
    const filename = key.replace("./", "");
    return {
      Key: `posts/${filename}`,
      title: data.title ?? filename.replace(".md", ""),
      date: data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : data.date ? String(data.date).slice(0, 10) : "",
      tags: data.tags ?? [],
    };
  });

  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return Promise.resolve(posts);
};

export default fetchPosts;
