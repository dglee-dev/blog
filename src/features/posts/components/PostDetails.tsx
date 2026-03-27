import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import usePost from "@/features/posts/hooks/usePost";

const PostDetails = () => {
  const { contents } = usePost();

  return (
    <Container>
      <ReactMarkdown>{contents}</ReactMarkdown>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 680px;
  padding: 48px 16px;

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
