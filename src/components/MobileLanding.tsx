import styled from "styled-components";
import React from "react";

const MobileLanding = () => {
  return (
    <Container>
      <div
        style={{
          fontSize: "2.5em",
          color: "black",
          borderRadius: "50%",
          display: "flex",
          whiteSpace: "nowrap",
          fontWeight: "700",
        }}
      >
        👾 프로젝트 📱
      </div>

      <Notice>스크롤을 내려주세요!</Notice>
    </Container>
  );
};

const Container = styled.div`
  min-height: calc(100svh - var(--nav-height));

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Notice = styled.div`
  font-size: 1em;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: blink 1.5s infinite ease-in-out;

  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

export default MobileLanding;
