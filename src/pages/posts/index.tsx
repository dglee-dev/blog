import React from "react";
import styled from "styled-components/macro";
import { last } from "lodash";

import PostList from "@/pages/posts/components/PostList";
import usePosts from "@/pages/posts/hooks/usePosts";

const PostPage = () => {
  const { posts } = usePosts();

  return (
    <Container>
      <PostList>
        {posts.map((post, index) => {
          const postKey = post.Key;

          const filename = last(
            postKey.split("/")
          );

          return (
            <PostList.Item
              key={`Post-${index}`}
              title={filename.split(".md")[0]}
              href={`/posts/${filename}`}
            />
          );
        })}
      </PostList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 500px;
`;

export default PostPage;
