import React from "react";
import styled from "styled-components/macro";

import useViewportType from "@/shared/hooks/useViewportType";

const Footer = () => {
  const { isMobile } = useViewportType();

  return (
    <Container>
      {isMobile ? (
        <>
          <div>이동규</div>
          <div>Frontend (Web) Developer</div>
        </>
      ) : (
        <div>이동규, Web Frontend Developer</div>
      )}
      <div>nninnnin7@gmail.com</div>
    </Container>
  );
};

const Container = styled.footer`
  padding-bottom: 2em;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  font-weight: 500;

  scroll-snap-align: end;

  @media screen and (max-width: 480px) {
    height: 100svh;
    padding-right: 2em;
  }

  & > div {
    margin-bottom: 0.5em;
  }
`;

export default Footer;
