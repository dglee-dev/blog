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
          <h3
            style={{
              margin: 0,
              marginBottom: 14,
            }}
          >
            Hello, World!
          </h3>
          <p style={{ marginBottom: 4 }}>
            안녕하세요, 개발자 이동규입니다.
          </p>

          <p>
            랜딩페이지 에디터, React Native 앱,
            LMS, 커머스 플랫폼, Canvas 기반
            에디터, Three.js와 Web AR기반
            인터랙티브 웹앱 등 여러가지 도메인과
            기술환경에서 프론트엔드 개발을
            경험해왔습니다.
          </p>

          <p>
            이러한 경험을 바탕으로, 현재는 여러
            종류의 애플리케이션을 일관되고
            효율적으로 개발·운영할 수 있도록 돕는
            엔지니어링 도구들 - CLI 툴, 페이지
            라우터, 디자인 시스템 - 을 직접
            만들거나 엔지니어링하는 방향으로
            발전을 지속하고 있습니다.
          </p>
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
