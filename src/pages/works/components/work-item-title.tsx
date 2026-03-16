import { last } from "lodash";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import { workItemStore } from "@/pages/works/store/work-items";
import { useWorkItemSelector } from "@/pages/works/components/work-item-selector";

const WorkItemTitle = () => {
  const { works } = useStore(workItemStore);
  const { touchingIds } = useWorkItemSelector();

  const selectedId = last(touchingIds);
  const selectedWork = works.find(
    (w) => w.id === selectedId,
  );

  return (
    <Container>
      <Title>{selectedWork?.title}</Title>
      <Description>{selectedWork?.description}</Description>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  background-color: orange;
`;

const Title = styled.div`
  font-family: "Gravi", sans-serif;
  font-size: 1.5em;
  font-weight: 500;
`;

const Description = styled.div`
  margin-top: 8px;
`;

export default WorkItemTitle;
