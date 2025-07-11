import React from "react";
import styled from "styled-components/macro";

import { WorkItem } from "@/pages/works/types";

const WorkDetails = ({
  workItem,
}: {
  workItem: WorkItem;
}) => {
  return (
    <div>
      <Title>{workItem.name}</Title>
      <Contents>{workItem.contents}</Contents>
    </div>
  );
};

const Title = styled.h1`
  font-weight: 500;
`;

const Contents = styled.p`
  font-size: 16px;
`;

export default WorkDetails;
