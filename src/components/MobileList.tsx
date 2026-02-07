import styled from "styled-components";
import React, { useRef } from "react";

const MobileList = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  return (
    <Container>
      <div
        ref={ref}
        style={{
          fontSize: "16px",
          color: "#1f1f1f",
          borderRadius: "50%",
          display: "flex",
          whiteSpace: "nowrap",
          fontWeight: "600",
          lineHeight: "1.4em",
        }}
      >
        웹 프론트엔드 개발자 이동규
        <br />
        프로젝트 포트폴리오
      </div>

      <Notice>스크롤을 내려주세요!</Notice>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100svh;
  height: 100dvh;

  display: flex;
  justify-content: start;
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

export default MobileList;
