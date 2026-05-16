import { useEffect } from "react";
import CardCarousel from "../components/CardCarousel";
import useNoOverscroll from "@/shared/hooks/useNoOverscroll";
import useRouter from "@lib/router/hooks/useRouter";

const HomePage = () => {
  useNoOverscroll("app-container");
  const { navigate } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search,
    );
    if (params.has("tag")) {
      navigate(`/works?${params.toString()}`);
    }
  }, []);

  return (
    <CardCarousel total={4}>
      <CardCarousel.Item index={0}>
        <CardCarousel.Card
          style={{
            width: "400px",
          }}
        >
          <h3>안녕하세요</h3>
          <p>개발자 이동규입니다.</p>

          <h4>
            1. 여러가지 도메인과 기술환경에서
            프론트엔드 개발 경험
          </h4>
          <p>
            랜딩페이지 에디터, React Native 앱,
            LMS, 커머스 플랫폼, Canvas 기반
            에디터, Three.js와 Web AR기반
            인터랙티브 웹 애플리케이션..
          </p>

          <h4>2. 프론트엔드 엔지니어링</h4>
          <ul style={{ lineHeight: "1.6em" }}>
            <li>
              기술을 사용하는 사람이 아닌, 기술을
              만드는 사람이 되려면?
            </li>
            <li>번들러는 어떻게 작동할까?</li>
            <li>
              라우터는 어떻게 라우트와 페이지
              컴포넌트를 매치시킬까?
            </li>
            <li>
              모듈 시스템은 어떻게 발전해왔을까?
            </li>
            <li>
              정적 분석이란 무엇이고, 어디에
              사용될까? 왜 중요할까?
            </li>
          </ul>
        </CardCarousel.Card>
      </CardCarousel.Item>

      <CardCarousel.Item index={1}>
        <CardCarousel.Card
          style={{
            width: "400px",
          }}
        >
          <h3
            style={{
              margin: 0,
              marginBottom: 14,
            }}
          >
            1. 바퀴의 재발명
          </h3>

          <p style={{ marginBottom: 4 }}>
            '바퀴를 재발명하지 말라' 고들 하지만..
            <br />
            세상의 모든 도구는 누군가가 만들어 준
            것 아니겠어요.
          </p>
        </CardCarousel.Card>
      </CardCarousel.Item>

      <CardCarousel.Item index={2}>
        <CardCarousel.Card
          style={{
            width: "400px",
          }}
        >
          <h3
            style={{
              margin: 0,
              marginBottom: 14,
            }}
          >
            2. Visual Programming
          </h3>
          <p style={{ marginBottom: 4 }}>
            눈에 보이는 <a href="">작은 실험들</a>
            을 반복합니다.
          </p>
        </CardCarousel.Card>
      </CardCarousel.Item>

      <CardCarousel.Item index={3}>
        <CardCarousel.Card
          style={{
            width: "400px",
          }}
        >
          <h3
            style={{
              margin: 0,
              marginBottom: 14,
            }}
          >
            3. 실패의 기록
          </h3>
          <p>
            이 블로그가 가치있는 이유는 제가
            저지른 여러 실수들을 기록하고,
            그로부터 내가 배워야 하는 점들을
            캐내어 하나씩 기록해두었다는 점에
            있습니다.
          </p>
          <p>
            예를 들어 <a href="">이런 글</a> 을
            보시면..
          </p>
        </CardCarousel.Card>
      </CardCarousel.Item>

      {/* <CardCarousel.Nav /> */}
    </CardCarousel>
  );
};

export default HomePage;
