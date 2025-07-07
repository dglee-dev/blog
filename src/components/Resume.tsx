import React from "react";
import styled, {
  css,
} from "styled-components/macro";

import ChopsticksConsumerGif from "@/images/chopsticks-consumer.gif";

import Carousel from "@/components/Carousel";
import TechStack from "@/components/TechStack";
import MobileLanding from "@/components/MobileLanding";
import useViewportType from "@/hooks/useViewportType";

const Resume = () => {
  const { isMobile } = useViewportType();

  return (
    <div>
      {isMobile && (
        <Section>
          <MobileLanding />
        </Section>
      )}

      <Section>
        <div className="desc">
          <h1>
            <a href="https://treasure-sb.kr/">
              성북마을 보물찾기
            </a>
          </h1>
          <p>
            성북구의 문화유산 체험과 교육을 위한
            모바일 웹 애플리케이션 `성북마을
            보물찾기`를 개발하였습니다.
            <br />
            <br />
            실시간 위치정보를 기반으로 AR 컨텐츠를
            트리거할 수 있으며, 총 5종의 AR 참새와
            함께 성북구의 문화유산과 관련된 퀴즈를
            풀 수 있습니다. 정답과 오답, 안내
            상태에 따라 참새가 다양한
            애니메이션으로 반응하여 유저에게
            즐거움을 줍니다.
          </p>
        </div>

        <Video
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "cover" }}
        >
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/sb-treasure-pf.mov"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>
            <a href="https://www.yongdamplay.co.kr/">
              용담플레이
            </a>
          </h1>
          <p>
            제주시 용담 1동의 문화유산 체험을 위한
            모바일 웹 애플리케이션 `용담 플레이`를
            개발하였습니다.
            <br />
            <br />
            Geolocation API를 통해 전달되는 실시간
            위치정보를 기반으로 지도 상 가까운
            거점을 선택하여 총 7종의 AR 컨텐츠를
            확인할 수 있으며 완료된 거점의 정보가
            모험경로에 순서대로 표시됩니다.
            <br />
            <br />
            모험을 마치며 용을 부화시킬 수 있으며,
            부화가 완료되었을 때 PWA의 경우
            유저에게 푸시알림을 통해 부화 완료를
            알립니다.
          </p>
        </div>

        <Video
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "cover" }}
        >
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/yongdam-play-pf.mov"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>
            <a href="https://www.wishfullmoon.kr/">
              청주에 뜬 달
            </a>
          </h1>
          <p>
            청주시립미술관의 강익중 특별전 `청주에
            뜬 달` 의 전시 체험에 사용된 웹 개발에
            참여하였습니다. 모바일과 데스크탑
            이용을 모두 대응합니다.
            <br />
            <br />
            인트로를 포함 3단계를 거쳐 작성된
            메세지를 서버로 전송하면 전시장 내
            미디어 월에 시각적으로 표현된 메세지를
            확인할 수 있습니다.
            <br />
            <br />
            상호작용의 즐거움을 더하기위해{" "}
            <code>p5.js</code>의 WebGL 모드를
            사용하여 유저의 터치에 반응해 무너지는
            3D 타일을 구현하였습니다.
          </p>
        </div>

        <Video
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "contain" }}
        >
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/wish-fullmoon-cropped.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>
            <a href="https://www.memorial-timecube.com/">
              메모리얼 타임큐브
            </a>
          </h1>
          <p>
            2024년 6월에 진행된 보훈부 행사{" "}
            <a href="https://www.koreamemorialfesta.com/">
              코리아 메모리얼 페스타
            </a>
            에 사용된 모바일 웹 `메모리얼
            타임큐브`에 개발자로 참여하였습니다.
            <br />
            <br />
            4종의 AR 컨텐츠를 확인할 수 있으며, UI
            개발에는 Web Component를 사용해 코드
            재사용성을 높였습니다. 인터랙션에 따라
            재생과 정지가 가능한 Marquee
            컴포넌트가 특징입니다.
            <br />
            <br />웹 AR 라이브러리{" "}
            <code>
              <a href="https://hiukim.github.io/mind-ar-js-doc/">
                MindAR
              </a>
            </code>{" "}
            의 얼굴인식 기능을 이용하여 페이스필터
            컨텐츠를 개발하였으며, 좌표 위치
            기반으로 증강되는 AR 컨텐츠 개발을
            위해서는{" "}
            <code>
              <a href="https://ar-js-org.github.io/AR.js-Docs/">
                AR.js
              </a>
            </code>{" "}
            가 사용되었습니다.
          </p>
        </div>

        <Video
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: "contain",
            backgroundColor: "black",
          }}
        >
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/korea-memorial-cropped.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>YDP DADADA</h1>
          <p>
            영등포 타임스퀘어 앞 광장에 위치한
            문화라운지 따따따에 설치된 인터랙티브
            미디어 3종을 개발하였습니다.
            <br />
            <br />
            조이스틱을 사용해 미디어를 조작할 수
            있으며 각각 다른 종류의 정보를
            탐색하고, 게임 형식을 통해 얻어진
            데이터를 기반으로 자신에게 어울리는
            미디어를 추천받을 수 있습니다.
            <br />
            <br />
            연속적인 카드 애니메이션을 구현하기
            위해{" "}
            <code>
              <a href="https://gsap.com/">GSAP</a>
            </code>
            의 타임라인 기능을 사용하였고,
            조이스틱 하드웨어의 인풋을 웹에서
            이용하기 위해 Gamepad API를
            사용하였습니다.
          </p>
        </div>

        <Video autoPlay loop muted playsInline>
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/ydp-whole.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>
            <a href="https://ar-dadada.ccydp.kr/">
              YDP DADADA AR
            </a>
          </h1>
          <p>
            영등포 타임스퀘어 앞 광장에 위치한
            `문화라운지 따따따`의 미디어와 연관된
            3D 모델들을 AR 컨텐츠로 제공하는
            모바일 웹을 개발하였습니다.
            <br />
            <br />
            iOS와 안드로이드 각각의 네이티브 AR
            SDK를 이용할 수 있도록 돕는{" "}
            <code>
              <a href="https://modelviewer.dev/">
                ModelViewer
              </a>
            </code>{" "}
            를 사용하여 높은 퀄리티의 AR 컨텐츠를
            제공합니다.
          </p>
        </div>

        <Video
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "contain" }}
        >
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/ydp-ar.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>
            <a href="https://piknic-entrepreneurship.vercel.app/">
              옵티컬 미 포텐셜 미
            </a>
          </h1>
          <p>
            복합 문화공간 피크닉의 전시{" "}
            <a href="https://piknic.kr/home/include/board_view.php?SEQ=CATEEXHIBITION0003">
              회사만들기
            </a>{" "}
            에 참여한 레벨나인의 프로젝트
            `옵티컬미 포텐셜미`에 모바일 웹
            개발자로 참여하였습니다.
            <br />
            <br />
            QR코드로 접근해 단계별로 질문에 답하고
            답변 정보가 포함된 바코드를
            출력합니다. 이후 사용자는 해당
            바코드를 인식시켜 자신에게 어울리는
            유형을 확인할 수 있습니다.
          </p>
        </div>

        <Image src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/piknic-opticalme.jpeg" />
      </Section>

      <Section>
        <div className="desc">
          <h1>
            <a href="https://www.decoding-my-emotion.com/">
              앤어플랜트 이모션디코더
            </a>
          </h1>
          <p>
            <a href="https://www.instagram.com/and_a_plant/">
              앤어플랜트
            </a>
            의 `감정해독기(Emotion Decoder)`
            프로젝트에 웹 개발자로 참여하였습니다.
            <br />
            <br />
            감정해독기는 크게 `이모션 스캐너`와
            `이모션 파노라마`로 구성되어 있으며
            각각 다른 질문과 결과물을 출력합니다.
            <br />
            <br />
            마치 장면이 넘어가듯 보여지는 페이지
            트랜지션을 구현하기 위해
            debounce/throttle을 활용했습니다.
          </p>
        </div>

        <Video autoPlay loop muted playsInline>
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AB%E1%84%83%E1%85%B5%E1%84%8F%E1%85%A9%E1%84%83%E1%85%A5-%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9-%E1%84%87%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A9.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>
            <a href="https://chopsticks.market">
              찹스틱스 소비자 플랫폼
            </a>
          </h1>
          <p>
            찹스틱스의 소비자 플랫폼을
            개발하였습니다. 찹스틱스 판매자
            플랫폼을 통해 등록된 상품의 내용을
            확인, 카트에 담고 주문할 수 있습니다.
            <br />
            <br />
            상품 선택 및 카트, 주문상태 구현을
            위한 데이터 구조 설계와 결제 모듈
            연동, 회원가입 및 내 정보 관리 기능을
            개발을 담당했습니다.
          </p>

          <TechStack
            stacks={[
              {
                name: "TypeScript",
                icon: "typescript",
              },
              {
                name: "Next.js",
                icon: "nextjs",
              },
              {
                name: "Recoil",
                icon: "recoil",
              },
              {
                name: "React Query",
                icon: "reactquery",
              },
              {
                name: "GraphQL",
                icon: "graphql",
              },
              {
                name: "아임포트(포트원)",
                icon: "portone",
              },
            ]}
          />
        </div>

        <Image
          alt="chopsticks-consumer"
          src={ChopsticksConsumerGif}
        />
      </Section>

      <Section>
        <div className="desc">
          <h1>찹스틱스 판매자 플랫폼</h1>
          <p>
            찹스틱스의 판매자 플랫폼을
            개발하였습니다. 판매자로 승인된 샵의
            정보를 등록하고, 해당 샵의 상품들을
            등록할 수 있습니다.
            <br />
            <br />
            상품에는 필수와 선택 옵션을 추가하고
            가격과 재고를 입력 및 수정할 수 있으며
            이외 조건부 무료배송 조건 등의 상품
            관련 정보 등록 및 수정에 필요한 데이터
            구조 설계 및 기능 구현을 담당했습니다.
          </p>

          <TechStack
            stacks={[
              {
                name: "TypeScript",
                icon: "typescript",
              },
              {
                name: "Apollo Client",
                icon: "apollo",
              },
              {
                name: "GraphQL",
                icon: "graphql",
              },
              {
                name: "React hook form",
                icon: "hookform",
              },
            ]}
          />
        </div>

        <Video autoPlay loop muted playsInline>
          <source
            src="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/chopsticks-seller.mp4"
            type="video/mp4"
          />
        </Video>
      </Section>

      <Section>
        <div className="desc">
          <h1>바닐라코딩 포털 서비스</h1>
          <p>
            바닐라코딩 포털 서비스를 기획, 디자인
            및 개발하였습니다. 코스 신청서를 작성,
            결제하고 코스 컨텐츠를 확인할 수
            있습니다.
            <br />
            <br />
            컨텐츠 관리의 용이성을 위해 Node.js의
            File system API를 사용해 폴더구조를
            컨텐츠의 카테고리 구조로 사용하도록
            구현하였습니다.
            <br />
            <br />
            Markdown 문법을 파싱해 원하는 스타일로
            렌더링하기 위해 remark/rehype를
            사용하였습니다.
          </p>
          <TechStack
            stacks={[
              {
                name: "Figma",
                icon: "typescript",
              },
              {
                name: "Next.js",
                icon: "nextjs",
              },
              {
                name: "아임포트(포트원)",
                icon: "portone",
              },
            ]}
          />
        </div>
        <Carousel
          images={[
            {
              alt: "portal1",
              src: "/portal-1.png",
            },
            // {
            //   alt: "portal2",
            //   src: "/portal-2.gif",
            // },
          ]}
        />
      </Section>

      <Section>
        <div className="desc">
          <h1>단어 퍼즐 앱 워디(Wordie)</h1>
          <p>
            단어 퍼즐 앱 워디(Wordie)을
            개발하였습니다.
            <br />
            <br />
            큐, 스택 등의 자료구조 개념을 사용하여
            단어의 알파벳 순서를 맞추는 게임을
            제공합니다. 게임에 필요한 자료구조를
            객체로 구현하여 게임의 구현과
            유지보수가 용이하도록 제작하였습니다.
            <br />
            <br />
            React Native(Expo)를 사용하였으며
            카카오, 네이버, 구글 소셜 로그인
            기능이 존재합니다. 안드로이드
            플레이스토어에 배포되었으나 현재는
            배포가 중단된 상태입니다.
          </p>

          <TechStack
            stacks={[
              {
                name: "React Native",
                icon: "react",
              },
              {
                name: "TypeScript",
                icon: "typescript",
              },
              {
                name: "GraphQL",
                icon: "graphql",
              },
            ]}
          />
        </div>

        {/* <Carousel
          images={[
            {
              alt: "rn1",
              src: "/rn-1.png",
            },
            {
              alt: "rn2",
              src: "/rn-2.png",
            },
          ]}
        /> */}

        <Image
          alt="rn1"
          src="/rn-1.png"
          style={{
            objectFit: "contain",
          }}
        />
      </Section>

      <Section>
        <div className="desc">
          <h1>
            <a href="https://piknic-piet-oudolf.netlify.app/">
              정원 만들기
            </a>
          </h1>
          <p>
            정원을 주제로 한 피크닉의 전시 `정원
            만들기`에 사용된 키오스크를
            개발하였습니다. 전시장 내부에 설치된
            프로젝터와 트랙패드를 이용해 Piet
            Oudolf의 정원 설계도를 기반으로 한
            정원 설계도를 탐색할 수 있습니다.
            <br />
            <br />
            마우스 드래그 앤 드롭으로 정원
            설계도를 이동하고 확대 및 축소하며
            설계도를 탐색할 수 있습니다. 설계도에
            표기된 구역을 클릭하면 각각의 자세한
            식재 정보를 확인할 수 있습니다.
          </p>
          <TechStack
            stacks={[
              {
                name: "JavaScript",
                icon: "javascript",
              },
              {
                name: "Netlify",
                icon: "netlify",
              },
            ]}
          />
        </div>
        <Image alt="piet1" src="/piet-1.gif" />
      </Section>

      <Section>
        <div className="desc">
          <h1>창문을 통해 어렴풋이</h1>
          <p>
            뉴욕의 사진가 사울레이터를 다룬
            피크닉의 전시 `창문을 통해 어렴풋이`에
            전시된 이미지 슬라이더를
            개발하였습니다.
            <br />
            <br />
            인스타그램에 #saulleiterinspired
            해시태그를 사용한 이미지들의 URL을
            통해 이미지를 가져와 슬라이더로
            표현합니다.
            <br />
            <br />
            인스타그램의 이미지 링크는 외부에서
            가져올 수 없으므로 프록시 서버를 통해
            요청한 후 따로 저장해두고, 이것을
            캐시로 사용하여 이미지를 가져오도록
            구현하였습니다.
          </p>
          <TechStack
            stacks={[
              {
                name: "JavaScript",
                icon: "javascript",
              },
              {
                name: "Node.js",
                icon: "nodejs",
              },
              {
                name: "Heroku",
                icon: "heroku",
              },
            ]}
          />
        </div>

        <Image alt="saul1" src="/saul-1.gif" />
      </Section>
    </div>
  );
};

export const Section = styled.div`
  margin-bottom: 2em;

  h1 {
    font-size: 1.2em;
    font-weight: 500;
  }

  p {
    padding-right: 1em;
    word-break: keep-all;
    text-align: left;
  }

  @media only screen and (max-width: 480px) {
    height: calc(100svh - var(--nav-height));
    margin-top: 0;

    padding-left: 2em !important;
    padding-right: 2em !important;

    display: flex;
    flex-direction: column;
    justify-content: center;

    scroll-snap-align: start;

    img,
    video {
      max-height: 40svh;
    }

    h1 {
      margin-top: -20px;
      font-size: min(3vh, 5vw) !important;
    }

    p {
      font-size: 12px;
    }

    /* &:first-child {
      scroll-snap-align: unset;
      height: calc(100svh - 81.19px) !important;

      h1 {
        margin-top: -20px;
      }

      @media only screen and (max-height: 620px) {
        scroll-snap-align: center;
        height: 100svh !important;

        h1 {
          margin-top: 0;
        }
      }
    } */
  }

  @media only screen and (min-width: 481px) {
    display: flex;

    .desc {
      flex: 0.6;
      min-width: 360px;
      padding: 1em;
      padding-top: 0;

      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 1.4em;

      margin-bottom: 1.2em;
      margin-left: 0;
      text-align: left;
    }

    p {
      padding-right: 0;
    }

    .desc {
      text-align: left;
    }

    padding: 0;
  }
`;

const mediaStyle = css`
  background-color: black;

  flex: 1;
  width: 300px;
  height: 300px;

  @media only screen and (max-width: 480px) {
    margin-top: 16px;
    width: 100%;
  }
`;

const Image = styled.img`
  ${mediaStyle}
`;

const Video = styled.video<{ objectFit: string }>`
  ${mediaStyle}
  object-fit: ${({ objectFit }) =>
    objectFit ? objectFit : "cover"};
`;

export default Resume;
