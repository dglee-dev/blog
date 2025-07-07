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
        1. 저는 도구를 직접 만드는 것을
        좋아합니다. 프론트엔드 개발자로서 너무
        추상화된 것들에 둘러쌓여 지내다보니 간단한
        도구는 직접 만들어 사용하는 것이 더 확실히
        제어하고 있다는 기분이 듭니다. 예를 들어,
        이 홈페이지의 라우터는 React Router를
        사용하지 않고 직접 라우트 로직을 만들어
        사용했습니다.
      </p>

      <p>
        2. 저는 Visual Programming에 관심이
        많습니다.
      </p>

      <p>아무튼 들러주셔서 고맙습니다.</p>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  word-break: keep-all;

  padding: 1em;
`;

export default HomePage;
