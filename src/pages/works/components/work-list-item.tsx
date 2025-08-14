import React from "react";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import { WorkItem } from "@/pages/works/types";
import { workItemStore } from "@/pages/works/store/work-items";

const WorkListItem = ({
  workItem,
}: {
  workItem: WorkItem;
}) => {
  const { setSelectedWork } = useStore(
    workItemStore
  );

  const handleClick = () => {
    setSelectedWork(workItem);
  };

  return (
    <Container
      onClick={handleClick}
      thumbnail={workItem.thumbnail.src}
      fit={workItem.thumbnail.style.fit}
      position={workItem.thumbnail.style.position}
    ></Container>
  );
};

const Container = styled.div<{
  thumbnail: string;
  position?: string;
}>`
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

  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  width: 20vw;
  height: 20vw;
  max-width: 300px;
  max-height: 300px;

  cursor: pointer;
`;

export default WorkListItem;
