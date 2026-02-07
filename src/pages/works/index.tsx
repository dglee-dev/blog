import React from "react";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import WorkListItem from "@/pages/works/components/work-list-item";
import { workItemStore } from "@/pages/works/store/work-items";

import useViewport from "@/shared/hooks/useViewport";

const WorksPage = () => {
  const { works, selectedWork } = useStore(
    workItemStore,
  );

  const { viewport } = useViewport();

  return (
    <Container>
      {works.map((workItem) => {
        return (
          <WorkListItem
            key={workItem.id}
            workItem={workItem}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: fit-content;
  padding: 0;
  margin: 0;
  margin-top: 20px;

  background-color: white;

  display: flex;
  flex-wrap: wrap;
`;

export default WorksPage;
