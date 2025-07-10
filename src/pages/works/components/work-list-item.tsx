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
      thumbnail={workItem.thumbnail}
    ></Container>
  );
};

const Container = styled.div<{
  thumbnail: string;
}>`
  background-color: blue;
  background-image: ${(props: {
    thumbnail: string;
  }) => `url("${props.thumbnail}")`};
  background-size: cover;
  background-position: center;

  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  width: 20vw;
  height: 20vw;

  cursor: pointer;
`;

export default WorkListItem;
