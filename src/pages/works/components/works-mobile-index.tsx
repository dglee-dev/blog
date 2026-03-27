import styled from "styled-components/macro";

import { WithId } from "@/shared/types/utils";
import { WorkItem } from "@/pages/works/types";

interface Props {
  works: Array<WithId<WorkItem>>;
}

const WorksMobileIndex = ({ works }: Props) => {
  return (
    <Container>
      {works.map((work, index) => (
        <IndexItem key={work.id} href={`#${work.slug}`}>
          <Number>{String(index + 1).padStart(2, "0")}</Number>
          <Title>{work.title}</Title>
        </IndexItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 100dvh;
  padding: 40px 28px;
`;

const IndexItem = styled.a`
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 10px 0;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const Number = styled.span`
  font-size: 0.75em;
  color: #aaa;
  flex-shrink: 0;
  width: 22px;
`;

const Title = styled.span`
  font-family: "Gravi", sans-serif;
  font-size: 1.1em;
  font-weight: 500;
`;

export default WorksMobileIndex;
