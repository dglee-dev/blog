import { useEffect, useState } from "react";
import CardCarousel from "../components/CardCarousel";
import useNoOverscroll from "@/shared/hooks/useNoOverscroll";
import useRouter from "@lib/router/hooks/useRouter";
import intro from "./Home.content";

const HomePage = () => {
  useNoOverscroll("app-container");
  const { navigate } = useRouter();
  const [lang, setLang] = useState<"ko" | "en">(
    "ko",
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
