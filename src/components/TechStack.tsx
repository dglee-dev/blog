import React from "react";
import { map } from "fxjs";
import styled from "styled-components/macro";
import { useMediaQuery } from "@uidotdev/usehooks";

import useMapIds from "../shared/hooks/useMapIds.ts";
import Badge, { Icons } from "./Badge.tsx";

interface Props {
  stacks: Array<{
    icon: keyof typeof Icons;
    name: string;
  }>;
}

const TechStack = ({ stacks }: Props) => {
  const stacksWithId = useMapIds(stacks);

  const isMobile = useMediaQuery(
    "only screen and (max-width: 480px)"
  );

  return (
    <Container>
      {!isMobile &&
        map((stack) => {
          return (
            <Badge
              key={stack.id}
              icon={stack.icon}
            >
              {stack.name}
            </Badge>
          );
        }, stacksWithId)}
    </Container>
  );
};

const Container = styled.div`
  display: none;
  align-items: center;
  flex-wrap: wrap;

  margin-top: auto;

  & > h3 {
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    margin-right: 8px;
  }
`;

export default TechStack;
