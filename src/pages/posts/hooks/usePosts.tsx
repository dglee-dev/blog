import { useEffect, useState } from "react";

interface PostObject {
  Key: string;
  ETag: string;
  Size: number;
}

const usePosts = () => {
  const [posts, setPosts] = useState<
    PostObject[]
  >([]);

  useEffect(() => {
    (async function () {
      const res = await fetch(
        "https://oct7lssmetmk5ftplu4npwnwne0bdkyp.lambda-url.ap-northeast-2.on.aws"
      );

      const result = await res.json();

      setPosts(result);
    })();
  }, []);

  return {
    posts,
  };
};

export default usePosts;
