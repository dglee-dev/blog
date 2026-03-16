import { forwardRef } from "react";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import { WorkItem } from "@/pages/works/types";
import { workItemStore } from "@/pages/works/store/work-items";

const WorkListItem = forwardRef<
  HTMLDivElement,
  { workItem: WorkItem; selected: boolean }
>(({ workItem, selected }, ref) => {
  const { setSelectedWork } = useStore(
    workItemStore,
  );

  const handleClick = () => {
    setSelectedWork(workItem);
  };

  return (
    <Container
      ref={ref}
      onClick={handleClick}
      thumbnail={workItem.thumbnail.src}
      selected={selected}
      fit={workItem.thumbnail.style.fit}
      position={workItem.thumbnail.style.position}
    />
  );
});

const Container = styled.div<{
  thumbnail: string;
  position?: string;
  selected: boolean;
}>`
  width: 125px;
  height: 125px;
  border-radius: 17px;

  background-color: white;
  background-image: ${(props: {
    thumbnail: string;
  }) => `url("${props.thumbnail}")`};
  background-size: ${(props: { fit?: string }) =>
    props.fit ? props.fit : "cover"};
  background-position: ${(props: {
    position?: string;
  }) =>
    props.position ? props.position : "center"};
  background-repeat: no-repeat;

  transition: all 0.08s ease-in-out;

  opacity: 0.35;

  ${(props: { selected: boolean }) =>
    props.selected
      ? "transform: scale(1.1); opacity: 1"
      : ""};

  box-shadow: 0 1px 7px 1px #e4e4e4;

  &:hover {
    opacity: 1;
  }

  cursor: pointer;
`;

export default WorkListItem;
