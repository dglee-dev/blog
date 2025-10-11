import { last } from "lodash";
import matter from "gray-matter";
import { useEffect, useState } from "react";

const usePost = () => {
  const [contents, setContents] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    const filename = decodeURIComponent(
      last(pathname.split("/"))
    );

    (async function () {
      const markdownStrings =
        await fetchFileContents(filename);

      const parsed = matter(markdownStrings);

      setContents(parsed.content);
    })();
  }, []);

  return {
    contents,
  };
};

const fetchFileContents = async (
  filename: string
) => {
  const res = await fetch(
    "https://whgxy3lfdxsly3nol276h5djia0upiwd.lambda-url.ap-northeast-2.on.aws"
  );

  return await res.text();
};

export default usePost;
