import { createStore } from "zustand";

import { WorkCredits } from "@/pages/works/components/work-credits";
import { WorkItem } from "@/pages/works/types";
import { mapListId } from "@/shared/utils";
import { WithId } from "@/shared/types/utils";

const worksWithoutId: Array<
  Omit<WorkItem, "id">
> = [
  {
    slug: "andongza-works",
    title: "Andongza Works",
    subtitle:
      "Archive website and contents editor for editor Ahn Dong Sun",
    description: (
      <>
        <div>
          전 하퍼스바자 피처에디터 안동선님의
          아카이브 웹사이트와 포스트 관리 어드민
          개발. 텍스트 작성, 이미지 첨부, 이미지
          슬라이드, 링크 삽입이 가능한 리치 텍스트
          에디터 포함.
        </div>

        <WorkCredits
          items={["디자인 김대순", "개발 이동규"]}
        />
      </>
    ),
    thumbnail: {
      src: "/images/works/andongza/thumb.png",
      style: {
        fit: "80%",
        position: "50% 50%",
      },
    },
  },
  {
    slug: "yongdam-play",
    title: "Yongdam Play",
    subtitle:
      "Mobile web application for cultural heritage experience in Jeju",
    description: (
      <>
        <div>
          제주시 용담동의 문화유산 체험 모바일 웹
          애플리케이션. 실시간 위치정보를 기반으로
          지도에서 거점으로 이동해 7종의 AR 컨텐츠
          체험 및 기록, 모든 거점 모험 완료 시
          용이 부화하며 PWA로 구현된 Push
          Notification 발생.
        </div>

        <WorkCredits
          items={[
            "프로젝트 기획 Rebel9",
            "프로젝트 매니지먼트 김용우",
            "UI 디자인 염주원",
            "3D 디자인 오지승",
            "UI / 컨텐츠개발 이동규",
          ]}
        />
      </>
    ),
    thumbnail: {
      src: "/images/works/yongdam/thumbnail.png",
      style: {
        fit: "cover",
        position: "center",
      },
    },
  },
  {
    slug: "seonyu-dongwha",
    title: "Seonyu Dongwha",
    subtitle:
      "AR mobile web experience at Seonyudo Park, Seoul",
    description: (
      <>
        서울시 수변갤러리 프로젝트의 일환으로
        선유도공원을 기반으로 한 AR 체험 모바일
        웹입니다. 5개 거점의 QR을 통해 AR 컨텐츠를
        체험할 수 있으며, 터치로 실시간 3D
        파티클을 그리는 인터랙션을
        프로토타이핑하여 제안하였습니다.
      </>
    ),
    thumbnail: {
      src: "/images/works/seonyudo/thumbnail.png",
      style: {
        fit: "cover",
        position: "center",
      },
    },
  },
  {
    slug: "sb-treasure",
    title: "SB Treasure",
    subtitle:
      "AR treasure hunt mobile web in Seongbuk district",
    description:
      "성북구의 문화유산 체험·교육을 위한 모바일 웹입니다. 실시간 위치기반으로 AR을 트리거하며, 5종의 AR 참새와 함께 문화유산 관련 퀴즈를 풀 수 있습니다.",
    thumbnail: {
      src: "/images/works/seongbuk/thumbnail.jpg",
      style: {
        fit: "150%",
        position: "center 20%",
      },
    },
  },
  {
    slug: "moon-over-cheongju",
    title: "Moon Over Cheongju",
    subtitle:
      "Interactive web installation for an art exhibition in Cheongju",
    description:
      "청주시립미술관 강익중 특별전의 전시 체험 웹입니다. 3단계를 거쳐 작성된 메세지가 전시장 내 미디어 월에 표현됩니다. p5.js WebGL을 활용해 터치에 반응하는 3D 타일을 구현하였습니다.",
    thumbnail: {
      src: "/images/works/cheongju/thumbnail2.png",
      style: {
        fit: "350%",
        position: "center",
      },
    },
  },
  {
    slug: "memorial-timecube",
    title: "Memorial Timecube",
    subtitle:
      "AR mobile web for Korea Memorial Festa 2024",
    description:
      "2024 코리아 메모리얼 페스타에 사용된 모바일 웹입니다. 4종의 AR 컨텐츠를 제공하며 Web Component로 UI를 구현하였습니다. MindAR 페이스필터와 AR.js 좌표 기반 AR 컨텐츠가 포함됩니다.",
    thumbnail: {
      src: "/images/works/korea-memorial/thumbnail.jpg",
      style: {
        fit: "200%",
        position: "center 45%",
      },
    },
  },
  {
    slug: "gardening",
    title: "Gardening",
    subtitle:
      "Interactive kiosk for a garden exhibition at Piknic",
    description:
      "피크닉 전시 '정원 만들기'의 키오스크입니다. Piet Oudolf의 정원 설계도를 드래그·확대·축소로 탐색하고 구역 클릭 시 식재 정보를 확인할 수 있습니다. 모달이 뷰포트를 벗어나지 않도록 바운더리를 계산해 위치를 조정하였습니다.",
    thumbnail: {
      src: "/images/works/piknic-gardening/gardening.png",
      style: {
        fit: "200%",
        position: "25% 20%",
      },
    },
  },
  {
    slug: "dadada",
    title: "Dadada",
    subtitle:
      "Joystick-driven interactive media installation in Yeongdeungpo",
    description:
      "영등포 타임스퀘어 '문화라운지 따따따'의 설치형 인터랙티브 미디어 3종을 개발하였습니다. 조이스틱으로 조작하며, GSAP 타임라인 기반 카드 애니메이션과 Gamepad API를 활용하였습니다.",
    thumbnail: {
      src: "/images/works/dadada/dadada.png",
      style: {
        fit: "120%",
        position: "center",
      },
    },
  },
  {
    slug: "rebel9-services",
    title: "Rebel9 Services",
    subtitle:
      "Scroll-driven service showcase for Rebel9",
    description:
      "레벨나인의 서비스 소개 페이지입니다. 스크롤에 따라 슬라이드 컨텐츠가 앞뒤로 페이드되는 트랜지션이 특징이며, Intersection Observer API를 활용해 구현하였습니다.",
    thumbnail: {
      src: "/images/works/rebel9-services/thumb.png",
      style: {
        fit: "260%",
        position: "top left",
      },
    },
  },
  {
    slug: "opticalme",
    title: "OpticalMe",
    subtitle:
      "QR-based personality matching mobile web for Piknic exhibition",
    description:
      "피크닉 전시 '회사만들기'의 모바일 웹입니다. QR로 접근해 단계별 질문에 답하면 바코드가 출력되고, 이를 인식시켜 자신에게 어울리는 유형을 확인할 수 있습니다. 노이즈 필터 기반 마이크로 인터랙션을 구현하였습니다.",
    thumbnail: {
      src: "/images/works/opticalme/thumb.png",
      style: {
        fit: "100%",
        position: "center",
      },
    },
  },
  {
    slug: "chopsticks",
    title: "Chopsticks",
    subtitle:
      "Consumer and seller platform for an e-commerce service",
    description:
      "찹스틱스의 소비자·판매자 플랫폼을 개발하였습니다. 상품 등록, 옵션 및 재고 관리, 장바구니, 주문, 결제 모듈 연동 등 플랫폼 핵심 기능의 데이터 구조 설계와 구현을 담당하였습니다.",
    thumbnail: {
      src: "/images/works/chopsticks/thumb.png",
      style: {
        fit: "160%",
        position: "30% 16%",
      },
    },
  },
  {
    slug: "wordie",
    title: "Wordie",
    subtitle:
      "Word puzzle mobile app built with React Native",
    description:
      "큐·스택 자료구조를 활용한 단어 퍼즐 모바일 앱입니다. React Native(Expo)로 개발하였으며 카카오·네이버·구글 소셜 로그인을 지원합니다. 안드로이드 플레이스토어에 배포되었습니다.",
    thumbnail: {
      src: "/images/works/wordie/thumb.png",
      style: {
        fit: "180%",
        position: "44% 50%",
      },
    },
  },
  {
    slug: "vanilla-portal",
    title: "Vanilla Portal",
    subtitle:
      "Course registration portal for Vanilla Coding bootcamp",
    description:
      "바닐라코딩 포털 서비스를 기획·디자인·개발하였습니다. 코스 신청서 작성·결제와 컨텐츠 확인 기능을 제공합니다. Node.js fs API로 폴더 구조를 컨텐츠 카테고리로 활용하고, remark/rehype로 Markdown을 파싱합니다.",
    thumbnail: {
      src: "/images/works/vanilla-portal/thumb.png",
      style: {
        fit: "100%",
        position: "top left",
      },
    },
  },
  {
    slug: "piknic-leiter",
    title: "Piknic Leiter",
    subtitle:
      "Image slider for a Saul Leiter exhibition at Piknic",
    description:
      "사울 레이터 전시 '창문을 통해 어렴풋이'의 이미지 슬라이더를 개발하였습니다. 인스타그램 #saulleiterinspired 이미지를 프록시 서버를 통해 수집·캐싱하여 슬라이더로 표현합니다.",
    thumbnail: {
      src: "/images/works/piknic-leiter/thumb.jpg",
      style: {
        fit: "320%",
        position: "49% 35%",
      },
    },
  },
];

export const workItemStore = createStore<{
  works: Array<WithId<WorkItem>>;
}>(() => ({
  works: mapListId<Omit<WorkItem, "id">>(
    worksWithoutId,
  ),
}));
