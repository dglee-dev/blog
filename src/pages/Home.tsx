import React from "react";
import styled from "styled-components/macro";

const HomePage = () => {
  return (
    <Container>
      <p
        style={{
          marginTop: 0,
        }}
      >
        안녕하세요! 개발자 이동규입니다.
      </p>

      <p>
        1. 도구를 직접 만드는 것을 좋아합니다.
        <ul>
          <li>
            이 홈페이지의 라우터는 React Router를
            사용하지 않고 직접 라우트 로직을
            만들어 사용했습니다.
          </li>
        </ul>
      </p>

      <p>
        2. Visual Programming에 관심이 많습니다.
      </p>
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
