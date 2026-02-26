import React from "react";
import type { IconKey } from "@/components/Badge";

export type ProjectTag =
  | "ar"
  | "interactive"
  | "web"
  | "mobile"
  | "exhibition";

export type TechStackItem = {
  name: string;
  icon: IconKey;
};

export type ProjectMedia =
  | {
      type: "video";
      src: string;
      style?: React.CSSProperties;
    }
  | {
      type: "image";
      src: string;
      alt?: string;
      style?: React.CSSProperties;
    };

export type ProjectItem = {
  id: string;
  title: string;
  titleHref?: string;
  description: React.ReactNode;
  media: ProjectMedia;
  techStack?: TechStackItem[];
  tags: ProjectTag[];
};

const projects: ProjectItem[] = [
  {
    id: "moon-over-cj",
    title: "청주에 뜬 달",
    description: (
      <p>
        청주시립미술관의 강익중 특별전 `청주에 뜬
        달` 의 전시 체험에 사용된 웹 개발에
        참여하였습니다. 모바일과 데스크탑 이용을
        모두 대응합니다.
        <br />
        <br />
        인트로를 포함 3단계를 거쳐 작성된 메세지를
        서버로 전송하면 전시장 내 미디어 월에
        시각적으로 표현된 메세지를 확인할 수
        있습니다.
        <br />
        <br />
        상호작용의 즐거움을 더하기위해{" "}
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://p5js.org/"
          >
            p5.js
          </a>
        </code>
        의 WebGL 모드를 사용하여 유저의 터치에
        반응해 무너지는 3D 타일을 구현하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/moon-over-cj.mp4",
      style: { objectFit: "cover" },
    },
    tags: ["interactive", "exhibition", "mobile"],
  },
  {
    id: "emotion-decoder",
    title: "앤어플랜트 이모션디코더",
    titleHref:
      "https://www.decoding-my-emotion.com/",
    description: (
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/and_a_plant/"
        >
          앤어플랜트
        </a>
        의 `감정해독기(Emotion Decoder)`
        프로젝트에 웹 개발자로 참여하였습니다.
        <br />
        <br />
        마치 장면이 넘어가듯 보여지는 페이지
        트랜지션을 구현하기 위해
        debounce/throttle을 활용해 스크롤 이벤트의
        감도를 제어하여 트랜지션 애니메이션과
        매핑하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/%E1%84%8B%E1%85%B5%E1%84%86%E1%85%A9%E1%84%89%E1%85%A7%E1%86%AB%E1%84%83%E1%85%B5%E1%84%8F%E1%85%A9%E1%84%83%E1%85%A5-%E1%84%91%E1%85%A9%E1%84%90%E1%85%B3%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9-%E1%84%87%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A9.mp4",
    },
    tags: ["interactive", "exhibition"],
  },
  {
    id: "andongza",
    title: "안동선 에디터 아카이브",
    titleHref: "https://andongza.works",
    description: (
      <p>
        안동선 에디터님의 아카이브 웹사이트와
        포스트 작성 및 관리를 위한 어드민을
        개발하였습니다.
        <br />
        <br />
        포스트 작성 시 사용되는 텍스트
        에디터에서는 텍스트를 작성하고, 이미지를
        첨부하고, 이미지 슬라이드를 만들고, 링크를
        첨부할 수 있습니다. 리치 텍스트 에디터
        구현을 위해{" "}
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://quilljs.com/"
          >
            Quill.js
          </a>
        </code>{" "}
        를 사용하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/andongza.mp4",
      style: { objectFit: "contain" },
    },
    tags: ["web"],
  },
  {
    id: "rebel9-services",
    title: "Rebel9 Services",
    titleHref: "https://rebel9.co.kr/en/services",
    description: (
      <p>
        레벨나인의 서비스들을 소개하는 페이지를
        개발하였습니다. 스크롤에 따라 슬라이드
        컨텐츠가 앞 뒤로 페이드되는 트랜지션이
        특징입니다. Intersection Observer API를
        이용해 구현하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/rebel9-products.mp4",
      style: { objectFit: "contain" },
    },
    tags: ["web"],
  },
  {
    id: "dr-rena",
    title: "닥터레나의 실험실",
    titleHref: "https://www.renalab.xyz/",
    description: (
      <p>
        수원 광교의 교육 프로그램 '닥터 레나의
        실험실' 의 참여 학생들의 직접 가져온
        물건들을 스캐닝해 만든 3D 모델들을 구경할
        수 있는 웹페이지를 개발하였습니다.
        <br />
        <br />
        3D 모델들을 렌더링하기 위해{" "}
        <code>
          <a href="https://modelviewer.dev/">
            model-viewer
          </a>
        </code>
        를 사용하였으며, 인트로 화면 배경에
        존재하는 키 비주얼 요소에 모션을 적용하기
        위해{" "}
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gsap.com/"
          >
            GSAP
          </a>
        </code>
        를 사용하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/dr-rena-x4.mp4",
      style: { objectFit: "contain" },
    },
    tags: ["exhibition", "web"],
  },
  {
    id: "seonyudonwha",
    title: "선유동화: Unseeing",
    titleHref: "https://www.seonyupublicart.com/",
    description: (
      <p>
        서울시의 수변갤러리 프로젝트 중 일부로서
        선유도공원을 기반으로 AR 컨텐츠를 체험할
        수 있는 모바일 웹 어플리케이션 `선유동화`
        를 개발하였습니다.
        <br />
        <br />
        5개의 거점에서 지도를 기반으로 선유도 공원
        곳곳에 설치된 팻말의 QR을 이용해 각 위치에
        맞는 AR 컨텐츠를 체험할 수 있습니다.
        <br />
        <br />
        현실에 꽃 기둥을 그려내는 듯한 경험을
        만들어내기 위해 터치 인터랙션을 통해
        실시간으로 3D 파티클을 그릴 수 있는 기능을
        프로토타이핑하여 제안하였고 디자이너와
        함께 발전시켜 완성하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/seonyudonwha-pf.mov",
      style: { objectFit: "cover" },
    },
    tags: ["ar", "mobile", "exhibition"],
  },
  {
    id: "yongdam-play",
    title: "용담플레이",
    titleHref: "https://www.yongdamplay.co.kr/",
    description: (
      <p>
        제주시 용담 1동의 문화유산 체험을 위한
        모바일 웹 애플리케이션 `용담 플레이`를
        개발하였습니다.
        <br />
        <br />
        Geolocation API를 통해 전달되는 실시간
        위치정보를 기반으로 지도 상 가까운 거점을
        선택하여 총 7종의 AR 컨텐츠를 확인할 수
        있으며 완료된 거점의 정보가 모험경로에
        순서대로 표시됩니다.
        <br />
        <br />
        모험을 마치며 용을 부화시킬 수 있으며,
        부화가 완료되었을 때 PWA의 경우 유저에게
        푸시알림을 통해 부화 완료를 알립니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/yongdam-play-pf.mov",
      style: { objectFit: "cover" },
    },
    tags: ["ar", "mobile"],
  },
  {
    id: "ar-heritage",
    title: "대동 AR Heritage",
    titleHref:
      "https://daedong-mobile-web.vercel.app/",
    description: (
      <p>
        광주광역시의 대동의 여러 지역들과 관련된
        AR 컨텐츠를 제공하는 `AR Heritage` 모바일
        웹 애플리케이션과 AR 컨텐츠를
        개발하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/ar-heritage-rotato.mov",
      style: { objectFit: "cover" },
    },
    tags: ["ar", "mobile"],
  },
  {
    id: "memorial-timecube",
    title: "메모리얼 타임큐브",
    description: (
      <p>
        2024년 6월에 진행된 보훈부 행사{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.koreamemorialfesta.com/"
        >
          코리아 메모리얼 페스타
        </a>
        에 사용된 모바일 웹 `메모리얼 타임큐브`에
        개발자로 참여하였습니다.
        <br />
        <br />
        4종의 AR 컨텐츠를 확인할 수 있으며, UI
        개발에는 Web Component를 사용해 코드
        재사용성을 높였습니다. 인터랙션에 따라
        재생과 정지가 가능한 Marquee 컴포넌트가
        특징입니다.
        <br />
        <br />웹 AR 라이브러리{" "}
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hiukim.github.io/mind-ar-js-doc/"
          >
            MindAR
          </a>
        </code>{" "}
        의 얼굴인식 기능을 이용하여 페이스필터
        컨텐츠를 개발하였으며, 좌표 위치 기반으로
        증강되는 AR 컨텐츠 개발을 위해서는{" "}
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ar-js-org.github.io/AR.js-Docs/"
          >
            AR.js
          </a>
        </code>{" "}
        가 사용되었습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/korea-memorial-cropped.mp4",
      style: {
        objectFit: "contain",
        backgroundColor: "black",
      },
    },
    tags: ["ar", "mobile"],
  },
  {
    id: "ydp-dadada",
    title: "YDP DADADA",
    description: (
      <p>
        영등포 타임스퀘어 앞 광장에 위치한
        문화라운지 따따따에 전시된 설치형
        인터랙티브 미디어 3종을 개발하였습니다.
        <br />
        <br />
        조이스틱을 사용해 미디어를 조작할 수
        있으며 각각 다른 종류의 정보를 탐색하고,
        게임 형식을 통해 얻어진 데이터를 기반으로
        자신에게 어울리는 미디어를 추천받을 수
        있습니다.
        <br />
        <br />
        연속적인 카드 애니메이션을 구현하기 위해{" "}
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gsap.com/"
          >
            GSAP
          </a>
        </code>
        의 타임라인 기능을 사용하였고, 조이스틱
        하드웨어의 인풋을 웹에서 이용하기 위해
        Gamepad API를 사용하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/ydp-whole.mp4",
    },
    tags: ["interactive", "exhibition"],
  },
  {
    id: "ydp-dadada-ar",
    title: "YDP DADADA AR",
    titleHref: "https://ar-dadada.ccydp.kr/",
    description: (
      <p>
        영등포 타임스퀘어 앞 광장에 위치한
        `문화라운지 따따따`의 미디어와 연관된 3D
        모델들을 AR 컨텐츠로 제공하는 모바일 웹을
        개발하였습니다.
        <br />
        <br />
        높은 퀄리티의 AR 컨텐츠를 제공하기 위해
        iOS와 안드로이드 각각의 네이티브 AR SDK를
        이용할 수 있도록 돕는{" "}
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://modelviewer.dev/"
          >
            model-viewer
          </a>
        </code>
        를 사용하였습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/ydp-ar.mp4",
      style: { objectFit: "contain" },
    },
    tags: ["ar", "mobile", "exhibition"],
  },
  {
    id: "piknic-opticalme",
    title: "옵티컬 미 포텐셜 미",
    titleHref:
      "https://piknic-entrepreneurship.vercel.app/",
    description: (
      <p>
        복합 문화공간 피크닉의 전시{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://piknic.kr/home/include/board_view.php?SEQ=CATEEXHIBITION0003"
        >
          회사만들기
        </a>{" "}
        에 참여한 레벨나인의 프로젝트 `옵티컬미
        포텐셜미`에 모바일 웹 개발자로
        참여하였습니다.
        <br />
        <br />
        QR코드로 접근해 단계별로 질문에 답하고
        답변 정보가 포함된 바코드를 출력합니다.
        이후 사용자는 해당 바코드를 인식시켜
        자신에게 어울리는 유형을 확인할 수
        있습니다.
        <br />
        <br />
        비주얼 컨셉에 어울리는 마이크로 인터랙션을
        위해 노이즈필터를 구현하여 적용하였습니다.
      </p>
    ),
    media: {
      type: "image",
      src: "https://ddbjbm834jucr.cloudfront.net/piknic-opticalme.jpeg",
    },
    tags: ["interactive", "exhibition", "mobile"],
  },
  {
    id: "piknic-garden",
    title: "정원 만들기",
    titleHref:
      "https://piknic-piet-oudolf.netlify.app/",
    description: (
      <p>
        정원을 주제로 한 피크닉의 전시 `정원
        만들기`에 사용된 키오스크를
        개발하였습니다. 전시장 내부에 설치된
        프로젝터와 트랙패드를 이용해 Piet Oudolf의
        정원 설계도를 기반으로 한 정원 설계도를
        탐색할 수 있습니다.
        <br />
        <br />
        마우스 드래그 앤 드롭으로 정원 설계도를
        이동하고 확대 및 축소하며 설계도를 탐색할
        수 있습니다. 설계도에 표기된 구역을
        클릭하면 각각의 자세한 식재 정보를 확인할
        수 있습니다.
        <br />
        <br />
        식재 정보가 화면을 벗어나지 않도록 모달
        크기와 뷰포트 바운더리를 계산하여 모달
        위치를 설정하도록 하였습니다.
      </p>
    ),
    media: {
      type: "image",
      alt: "piet1",
      src: "/piet-1.gif",
    },
    techStack: [
      { name: "JavaScript", icon: "javascript" },
      { name: "Netlify", icon: "netlify" },
    ],
    tags: ["interactive", "exhibition"],
  },
  {
    id: "saul-leiter",
    title: "창문을 통해 어렴풋이",
    description: (
      <p>
        뉴욕의 사진가 사울레이터를 다룬 피크닉의
        전시 `창문을 통해 어렴풋이`에 전시된
        이미지 슬라이더를 개발하였습니다.
        <br />
        <br />
        인스타그램에 #saulleiterinspired
        해시태그를 사용한 이미지들의 URL을 통해
        이미지를 가져와 슬라이더로 표현합니다.
        <br />
        <br />
        인스타그램의 이미지 링크는 외부에서 가져올
        수 없으므로 프록시 서버를 통해 요청한 후
        따로 저장해두고, 이것을 캐시로 사용하여
        이미지를 가져오도록 구현하였습니다.
      </p>
    ),
    media: {
      type: "image",
      alt: "saul1",
      src: "/saul-1.gif",
    },
    techStack: [
      { name: "JavaScript", icon: "javascript" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Heroku", icon: "heroku" },
    ],
    tags: ["interactive", "exhibition"],
  },
  {
    id: "chopsticks-consumer",
    title: "찹스틱스 소비자 플랫폼",
    titleHref: "https://chopsticks.market",
    description: (
      <p>
        찹스틱스의 소비자 플랫폼을 개발하였습니다.
        찹스틱스 판매자 플랫폼을 통해 등록된
        상품의 내용을 확인, 카트에 담고 주문할 수
        있습니다.
        <br />
        <br />
        상품 선택 및 카트, 주문상태 구현을 위한
        데이터 구조 설계와 결제 모듈 연동,
        회원가입 및 내 정보 관리 기능을 개발을
        담당했습니다.
      </p>
    ),
    media: {
      type: "image",
      alt: "chopsticks-consumer",
      src: "/chopsticks-consumer.gif",
    },
    techStack: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Recoil", icon: "recoil" },
      { name: "React Query", icon: "reactquery" },
      { name: "GraphQL", icon: "graphql" },
      {
        name: "아임포트(포트원)",
        icon: "portone",
      },
    ],
    tags: ["web"],
  },
  {
    id: "chopsticks-seller",
    title: "찹스틱스 판매자 플랫폼",
    description: (
      <p>
        찹스틱스의 판매자 플랫폼을 개발하였습니다.
        판매자로 승인된 샵의 정보를 등록하고, 해당
        샵의 상품들을 등록할 수 있습니다.
        <br />
        <br />
        상품에는 필수와 선택 옵션을 추가하고
        가격과 재고를 입력 및 수정할 수 있으며
        이외 조건부 무료배송 조건 등의 상품 관련
        정보 등록 및 수정에 필요한 데이터 구조
        설계 및 기능 구현을 담당했습니다.
      </p>
    ),
    media: {
      type: "video",
      src: "https://ddbjbm834jucr.cloudfront.net/chopsticks-seller.mp4",
    },
    techStack: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Apollo Client", icon: "apollo" },
      { name: "GraphQL", icon: "graphql" },
      {
        name: "React hook form",
        icon: "hookform",
      },
    ],
    tags: ["web"],
  },
  {
    id: "vanilla-coding-portal",
    title: "바닐라코딩 포털 서비스",
    description: (
      <p>
        바닐라코딩 포털 서비스를 기획, 디자인 및
        개발하였습니다. 코스 신청서를 작성,
        결제하고 코스 컨텐츠를 확인할 수 있습니다.
        <br />
        <br />
        컨텐츠 관리의 용이성을 위해 Node.js의 File
        system API를 사용해 폴더구조를 컨텐츠의
        카테고리 구조로 사용하도록 구현하였습니다.
        <br />
        <br />
        Markdown 문법을 파싱해 원하는 스타일로
        렌더링하기 위해 remark/rehype를
        사용하였습니다.
      </p>
    ),
    media: {
      type: "image",
      src: "/portal-2.gif",
      style: { objectFit: "contain" },
    },
    techStack: [
      { name: "Figma", icon: "typescript" },
      { name: "Next.js", icon: "nextjs" },
      {
        name: "아임포트(포트원)",
        icon: "portone",
      },
    ],
    tags: ["web"],
  },
  {
    id: "wordie",
    title: "단어 퍼즐 앱 워디(Wordie)",
    description: (
      <p>
        단어 퍼즐 앱 워디(Wordie)을
        개발하였습니다.
        <br />
        <br />
        큐, 스택 등의 자료구조 개념을 사용하여
        단어의 알파벳 순서를 맞추는 게임을
        제공합니다. 게임에 필요한 자료구조를
        객체로 구현하여 게임의 구현과 유지보수가
        용이하도록 제작하였습니다.
        <br />
        <br />
        React Native(Expo)를 사용하였으며 카카오,
        네이버, 구글 소셜 로그인 기능이
        존재합니다. 안드로이드 플레이스토어에
        배포되었으나 현재는 배포가 중단된
        상태입니다.
      </p>
    ),
    media: {
      type: "image",
      alt: "rn1",
      src: "/rn-1.png",
      style: { objectFit: "contain" },
    },
    techStack: [
      { name: "React Native", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "GraphQL", icon: "graphql" },
    ],
    tags: ["mobile"],
  },
];

export default projects;
