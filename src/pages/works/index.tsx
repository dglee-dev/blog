import React from "react";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import WorkListItem from "@/pages/works/components/work-list-item";
import { workItemStore } from "@/pages/works/store/work-items";

const WorksPage = () => {
  const { works, selectedWork } = useStore(
    workItemStore
  );

  return (
    <Container>
      <ListSection>
        {works.map((workItem) => {
          return (
            <WorkListItem
              key={workItem.id}
              workItem={workItem}
            />
          );
        })}
      </ListSection>

      <DetailsSection>
        <h1>{selectedWork.name}</h1>

        <p>{selectedWork.contents}</p>
      </DetailsSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;

  display: flex;
`;

const ListSection = styled.section`
  background-color: #f3f3f3;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 20vw;
  gap: 0;
`;

const DetailsSection = styled.section`
  background-color: skyblue;
  flex: 1;
`;

export default WorksPage;
