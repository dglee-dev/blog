import React from "react";
import styled from "styled-components/macro";

import PostList from "@/pages/posts/components/PostList";

const PostPage = () => {
  return (
    <Container>
      <PostList>
        <PostList.Item
          title="7월 둘째 주 읽기 자료"
          href="/posts/july-second-weekly-readings"
        />

        <PostList.Item
          title="7월 둘째 주 읽기 자료"
          href="/posts/july-second-weekly-readings"
        />
      </PostList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 500px;
`;

export default PostPage;
