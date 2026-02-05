import React from "react";
import styled from "styled-components/macro";

import useViewportType from "@/hooks/useViewportType";

const Footer = () => {
  const { isMobile } = useViewportType();

  return (
    <Container>
      {isMobile ? (
        <>
          <div>이동규</div>
          <div>웹 프론트엔드 개발자</div>
          <div>nninnnin7@gmail.com</div>
        </>
      ) : (
        <div
          style={{
            paddingBottom: "2.5em",
          }}
        >
          <div style={{ marginBottom: "0.5em" }}>
            웹 프론트엔드 개발자 이동규
          </div>
          <div>nninnnin7@gmail.com</div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.footer`
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
`;

export default Footer;
