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
        <h4>1. 바퀴의 재발명</h4>

        <p>
          '바퀴를 재발명하지 말라' 고들 하지만..
          <br />
          세상의 모든 도구는 누군가가 대신
          만들어준 것 아니겠어요.
        </p>
      </div>

      <div>
        <h4>2. Visual Programming</h4>

        <p>
          눈에 보이는 <a href="">작은 실험들</a>을
          반복합니다.
        </p>
      </div>

      <div>
        <h4>3. 실패의 기록</h4>

        <p>
          이 블로그가 가치있는 이유는 제가 저지른
          여러 실수들을 기록하고, 그로부터 내가
          배워야 하는 점들을 캐내어 하나씩
          기록해두었다는 점에 있습니다.
        </p>

        <p>
          예를 들어 <a href="">이런 글</a> 을
          보시면..
        </p>
      </div>

      <hr />

      <div
        style={{
          color: "gray",
        }}
      >
        <h3>요즘 관심사..</h3>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",

            fontSize: "14px",
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
