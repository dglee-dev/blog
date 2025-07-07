import React from "react";
import styled from "styled-components/macro";

const WorksPage = () => {
  return (
    <Container>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 20vw;
  gap: 0;
`;

const Item = styled.div`
  background-color: blue;

  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  width: 20vw;
  height: 20vw;
`;

export default WorksPage;
