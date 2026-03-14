import React from "react";
import styled from "styled-components/macro";

const HomePage = () => {
  return (
    <Container>
      <h3>Hello, World!</h3>
      <p
        style={{
          marginTop: 0,
        }}
      >
        안녕하세요! 개발자 이동규입니다.
      </p>

      <div>
        <h4>
          1. 도구를 직접 만드는 것을 좋아합니다.
        </h4>

        <p>
          이 홈페이지의 라우터는 React Router를
          사용하지 않고 직접 라우트 로직을 만들어
          사용했습니다.
        </p>
      </div>

      <div>
        <h4>
          2. Visual Programming에 관심이 많습니다.
        </h4>

        <p>그렇습니다.</p>
      </div>

      <hr />

      <div>
        <h3>요즘 관심사..</h3>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <li>홈페이지 기깔나게 만들기</li>

          <li>
            유튜브 썸네일 제작하는 툴 만들기
          </li>

          <li>
            성공적인 직장인이 아니라 '진짜 도구'
            를 만드는 개발자 되기
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  word-break: keep-all;

  padding: 16px;

  font-size: 16px;
`;

export default HomePage;
