import ReactMarkdown from "react-markdown";
import styled from "styled-components/macro";

import usePost from "@/features/posts/hooks/usePost";

const PostDetails = () => {
  const { contents, title, description } =
    usePost();

  return (
    <Container>
      <Header>
        <TitleRow>
          {title && <Title>{title}</Title>}
          <GoBack onClick={() => history.back()}>
            GO BACK
          </GoBack>
        </TitleRow>

        <div>
          {description && (
            <Description>
              {description}
            </Description>
          )}
        </div>
      </Header>
      <Body>
        <ReactMarkdown>{contents}</ReactMarkdown>
        <Spacer />
      </Body>
    </Container>
  );
};

const Header = styled.div`
  position: sticky;
  top: 0px;
  background: white;
  padding: 40px 16px 4px 12px;
  border-bottom: 1px solid #e0e0e0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 27px;
  font-weight: 800;
  font-family: "Gravi", "Pretendard", sans-serif;
  line-height: 1.3;
  letter-spacing: 0.2px;
  margin: 0 !important;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  margin: 24px 0 0;
  color: #666;
  line-height: 1.6;
  white-space: pre-line;
`;

const GoBack = styled.button`
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  font-family: "Gravi", sans-serif;
  font-size: 15px;
  cursor: pointer;
  color: inherit;
  white-space: nowrap;

  &:hover {
    color: violet;
  }

  @media (max-width: 480px) {
    &:hover {
      color: inherit;
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Body = styled.div`
  padding: 0 16px;
`;

const Spacer = styled.div`
  height: 120px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 680px;
  align-self: flex-start;

  h1,
  h2,
  h3,
  h4 {
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

  ul,
  ol {
    padding-left: 1.5em;
    margin: 0.8em 0;
  }

  li {
    margin: 0.3em 0;
    line-height: 1.6;
  }
`;

export default PostDetails;
