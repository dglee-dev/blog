import { last } from "lodash";
import matter from "gray-matter";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = (require as any).context("../../../../docs/posts", false, /\.md$/);

const usePost = () => {
  const [contents, setContents] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    const filename = decodeURIComponent(last(pathname.split("/")));

    try {
      const raw = ctx(`./${filename}`) as string;
      const { content, data } = matter(raw);
      setContents(content);
      setTitle(data.title ?? "");
    } catch {
      setContents("포스트를 찾을 수 없습니다.");
    }
  }, []);

  return {
    contents,
    title,
  };
};

export default usePost;
