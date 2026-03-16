import { useStore } from "zustand";
import styled from "styled-components/macro";

import WorkListItem from "@/pages/works/components/work-list-item";
import { workItemStore } from "@/pages/works/store/work-items";

import useViewport from "@/shared/hooks/useViewport";
import {
  useHorizontalLine,
  HorizontalLine,
} from "@/shared/hooks/useHorizontalLine";
import { createPortal } from "react-dom";
import { last } from "lodash";

const WorksPage = () => {
  const { works, selectedWork } = useStore(
    workItemStore,
  );

  const { viewport } = useViewport();

  const { lineRef, registerTarget, touchingIds } =
    useHorizontalLine();

  return (
    <Container>
      {works.map((workItem) => {
        return (
          <WorkListItem
            key={workItem.id}
            workItem={workItem}
            ref={registerTarget(workItem.id)}
            selected={
              last(touchingIds) === workItem.id
            }
          />
        );
      })}

      {createPortal(
        <HorizontalLine
          style={{
            position: "fixed",
            top: "50%",
            transform: "translateY(-50%)",
            left: 0,
          }}
          thickness={50}
          color={"transparent"}
          ref={lineRef}
        />,
        document.body,
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: fit-content;
  padding: 0;
  margin: 0;
  margin-top: 40dvh;
  margin-bottom: 40dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;

export default WorksPage;
