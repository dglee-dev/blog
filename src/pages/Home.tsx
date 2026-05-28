import { useEffect, useState } from "react";
import CardCarousel from "../components/CardCarousel";
import useNoOverscroll from "@/shared/hooks/useNoOverscroll";
import useRouter from "@lib/router/hooks/useRouter";

const intro = {
  ko: {
    greeting: "안녕하세요!",
    name: "개발자 이동규입니다.",
    career:
      "2020년 11월부터 현재까지 프론트엔드 개발자로서 5개의 각기 다른 도메인과 규모, 성장단계의 회사에서 일하며 여러 종류와 기술을 사용하는 프로덕트를 개발해왔습니다.",
    goal: "현재는 빠르게 기능을 구현하는 개발자를 너머 기술의 배경과 작동 원리를 파악하고 적재 적소에 배치할 수 있으며 때로는 도구를 직접 만들어낼 수 있는 엔지니어로서 나아가기 위해 아래와 같은 질문들을 해나가고 있습니다.",
    questions: [
      "기술을 사용하는 사람이 아닌, 기술을 만드는 사람이 되려면 무엇을 알아야할까?",
      "번들러는 어떻게 작동할까?",
      "라우터는 어떻게 라우트와 페이지 컴포넌트를 매치시킬까?",
      "모듈 시스템은 어떻게 발전해왔을까?",
      "정적 분석이란 무엇이고, 어디에 사용될까? 왜 중요할까?",
    ],
  },
  en: {
    greeting: "Hello!",
    name: "I'm Donggyu Lee, a Frontend Developer.",
    career:
      "Since November 2020, I've worked as a frontend developer across 5 companies spanning different domains, scales, and growth stages — building products with a wide variety of technologies.",
    goal: "I'm now moving beyond being a developer who rapidly ships features, toward becoming an engineer who understands the why and how behind technology, knows where to apply it, and can sometimes build the tools themselves. I pursue this through questions like:",
    questions: [
      "What does it take to go from using technology to building it?",
      "How does a bundler work?",
      "How does a router match routes to page components?",
      "How has the module system evolved over time?",
      "What is static analysis, where is it used, and why does it matter?",
    ],
  },
};

const HomePage = () => {
  useNoOverscroll("app-container");
  const { navigate } = useRouter();
  const [lang, setLang] = useState<"ko" | "en">(
    "en",
  );

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search,
    );
    if (params.has("tag")) {
      navigate(`/works?${params.toString()}`);
    }
  }, []);

  const t = intro[lang];

  return (
    <CardCarousel total={4}>
      <CardCarousel.Item index={0}>
        <CardCarousel.Card
          style={{
            width: "440px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <h3 style={{ margin: 0 }}>
              {t.greeting}
            </h3>
            <button
              onClick={() =>
                setLang((prev) =>
                  prev === "ko" ? "en" : "ko",
                )
              }
              style={{
                background: "none",
                border: "1px solid currentColor",
                borderRadius: "4px",
                padding: "2px 8px",
                cursor: "pointer",
                fontSize: "0.75em",
                opacity: 0.5,
                color: "inherit",
                flexShrink: 0,
              }}
            >
              {lang === "ko" ? "EN" : "KO"}
            </button>
          </div>
          <p>{t.name}</p>

          <p>{t.career}</p>

          <p>{t.goal}</p>

          <ul style={{ lineHeight: "1.6em" }}>
            {t.questions.map((q) => (
              <li key={q}>{q}</li>
            ))}
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
