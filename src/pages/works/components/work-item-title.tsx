import { last } from "lodash";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import { workItemStore } from "@/pages/works/store/work-items";
import { useWorkItemSelector } from "@/pages/works/components/work-item-selector";
import { PROJECT_LIST_WIDTH } from "@/pages/works/constants";

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
      <Description>
        {selectedWork?.subtitle}
      </Description>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: skyblue; */

  pointer-events: none;

  width: 400px;
  position: fixed;
  left: 50%;
  transform: ${`translate(calc(-100% - ${PROJECT_LIST_WIDTH / 2}px))`};

  top: 45%;
`;

const Title = styled.div`
  font-family: "Gravi", sans-serif;
  font-size: 1.5em;
  font-weight: 500;
`;

const Description = styled.div`
  margin-top: 8px;
  word-break: keep-all;
`;

export default WorkItemTitle;
