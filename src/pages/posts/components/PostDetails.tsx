import React from "react";
import styled from "styled-components";

import usePost from "@/pages/posts/hooks/usePost";

const PostDetails = () => {
  const { contents } = usePost();

  return (
    <Container>
      <Paragraph>{contents}</Paragraph>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Paragraph = styled.p`
  padding: 1em;
  margin: 0;
`;

export default PostDetails;
