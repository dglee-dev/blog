import React from "react";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import WorkListItem from "@/pages/works/components/work-list-item";
import { workItemStore } from "@/pages/works/store/work-items";

import useViewport from "@/shared/hooks/useViewport";

const WorksPage = () => {
  const { works, selectedWork } = useStore(
    workItemStore
  );

  const { viewport } = useViewport();

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

      {viewport === "desktop" && (
        <DetailsSection>
          Work Item Details
        </DetailsSection>
      )}
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

  grid-template-columns: repeat(
    2,
    min(20vw, 300px)
  );

  @media (min-width: 1500px) {
    grid-template-columns: repeat(
      3,
      min(20vw, 300px)
    );
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(
      4,
      min(20vw, 300px)
    );
  }

  grid-auto-rows: min(20vw, 300px);
  gap: 0;
`;

const DetailsSection = styled.section`
  background-color: #f9f9f9;
  flex: 1;

  padding: 2em;
`;

export default WorksPage;
