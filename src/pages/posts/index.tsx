import { last } from "lodash";
import styled from "styled-components/macro";

import PostList from "@/features/posts/components/PostList";
import usePosts from "@/features/posts/hooks/usePosts";
import Spinner from "@/shared/components/Spinner";

const PostPage = () => {
  const { posts } = usePosts();
  const isLoading = posts.length === 0;

  if (isLoading) return <SpinnerContainer><Spinner /></SpinnerContainer>;

  return (
    <Container>
      <PostList>
        {posts.map((post, index) => {
          const postKey = post.Key;
          const filename = last(postKey.split("/"));

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

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PostPage;
