import { useEffect, useState } from "react";
import fetchPosts, { PostObject } from "@/features/posts/api/fetchPosts";
import usePrefetchCache from "@lib/router/hooks/usePrefetchCache";
import { usePrefetchCacheContext } from "@lib/router/context/PrefetchCacheContext";

const usePosts = () => {
  const cached = usePrefetchCache<PostObject[]>("posts");
  const { setPrefetchCache } = usePrefetchCacheContext();
  const [posts, setPosts] = useState<PostObject[]>(cached ?? []);

  useEffect(() => {
    if (cached) {
      console.log("[prefetch] cache hit: posts");
      return;
    }

    console.log("[prefetch] cache miss: posts — fetching now");
    fetchPosts().then((result) => {
      setPosts(result);
      setPrefetchCache("posts", result);
    });
  }, []);

  return {
    posts: cached ?? posts,
  };
};

export default usePosts;
