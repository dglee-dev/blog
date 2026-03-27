import ReactMarkdown from "react-markdown";
import styled from "styled-components/macro";

import usePost from "@/features/posts/hooks/usePost";

const PostDetails = () => {
  const { contents, title } = usePost();

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <ReactMarkdown>{contents}</ReactMarkdown>
      <Spacer />
    </Container>
  );
};

const Title = styled.h1`
  font-size: 1.4em;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 1.5em;
`;

const Spacer = styled.div`
  height: 120px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 680px;
  padding: 48px 16px 0;

  h1, h2, h3, h4 {
    margin: 1.5em 0 0.5em;
    line-height: 1.3;
  }

  p {
    margin: 0.8em 0;
    line-height: 1.7;
  }

  pre {
    background: #f5f5f5;
    padding: 16px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 14px;
  }

  code {
    background: #f5f5f5;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 0.9em;
  }

  pre code {
    background: none;
    padding: 0;
  }

  ul, ol {
    padding-left: 1.5em;
    margin: 0.8em 0;
  }

  li {
    margin: 0.3em 0;
    line-height: 1.6;
  }
`;

export default PostDetails;
