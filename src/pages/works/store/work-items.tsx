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
          items={[
            "기획, 디자인 김대순",
            "개발 이동규",
          ]}
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
          용을 부화시킬 수 있으며, 용 부화 시
          사용자에게 Push Notification으로 알림.
        </div>

        <WorkCredits
          items={[
            "기획 Rebel9",
            "프로젝트 관리 김용우",
            "UI 디자인 염주원",
            "3D 디자인 조다은, 오지승",
            "개발 이동규",
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
        선유도공원의 5개 구역을 기반으로 하늘을
        날아다니는 고래와 새 등의 증강을 체험할 수
        있는 모바일 웹. QR 코드 패널을 통해 AR
        컨텐츠를 체험할 수 있으며, 스크린 터치로
        3D 파티클을 그리는 인터랙션 탑재.
        <WorkCredits
          items={[
            "기획 Rebel9",
            "프로젝트 관리 권희주, 김용우",
            "UI 디자인 김정욱",
            "3D 디자인 오지승",
            "개발 이동규",
          ]}
        />
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
    description: (
      <>
        성북구의 문화유산 체험·교육을 위한 모바일
        웹. 실시간 위치기반으로 AR을 트리거하며,
        한양도성, 의릉, 선잠박물관, 심우장, 정릉의
        다섯 거점에서 각기 다른 다섯 종류의 참새가
        머리 위에 증강되며 대화형 텍스트 UI를 통해
        함께 문화유산 관련 퀴즈를 풀 수 있다.
        <WorkCredits
          items={[
            "기획 Rebel9",
            "프로젝트 관리 고아라, 송지훈",
            "UI 디자인 김은재",
            "3D 디자인 김민우",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        <div>
          청주시립미술관 강익중 특별전의 전시
          체험을 위한 사용자 응답 제출용 모바일 웹
          애플리케이션. 3단계 퍼널에서의 선택과
          입력을 거쳐 제출된 사용자 응답이 전시장
          내 대형 미디어 월에서 표현된다. 설문의
          지루함을 상쇄하기 위해 터치에 반응하는
          3D 타일을 구현하여 작은 즐거움을 제공.
        </div>

        <WorkCredits
          items={[
            "기획 Rebel9",
            "프로젝트 관리 정휘윤",
            "그래픽 디자인 박지연",
            "UI 디자인 장보람",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        <div>
          2024년 보훈부의 코리아 메모리얼 페스타
          행사에 사용된 모바일 웹. 네 종류의 AR
          컨텐츠를 제공하며 Web Component로 UI를
          구현.
        </div>

        <WorkCredits
          items={[
            "기획 Rebel9",
            "프로젝트 관리 조근하, 김용우",
            "UI 디자인 김은재",
            "3D 디자인 오지승",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        Piet Oudolf의 정원 설계도를 탐색하고
        식재정보를 확인하는 기능의 웹
        애플리케이션. 피크닉의 전시 '정원만들기'
        의 일부로 제작되었으며, 전시 공간의
        스크린으로 프로젝션된 설계도를 트랙패드로
        드래그하여 탐색하고 각 식재 구역을
        클릭하여 식재정보를 확인할 수 있다.
        <WorkCredits
          items={[
            "기획, 디자인 김대순",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
    title: "YDP Dadada",
    subtitle:
      "Joystick-driven interactive media installation in Yeongdeungpo",
    description: (
      <>
        <div>
          영등포 타임스퀘어 앞 광장에 설치된
          체험형 컨테이너 박스 '문화라운지
          따따따'의 인터랙티브 미디어 3종. PC에서
          실행된 브라우저 기반의 웹 애플리케이션이
          43인치 TV에서 재생되며 조이스틱으로
          조작. GSAP 타임라인 기반 카드
          애니메이션과 Gamepad API를 활용하여
          개발.
        </div>

        <WorkCredits
          items={[
            "기획 Rebel9",
            "프로젝트 관리 고아라, 김민우",
            "UI 디자인 곽솔아",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        <div>
          레벨나인 자체 개발 프로덕트의 소개를
          위한 웹페이지. 스크롤에 따라 슬라이드
          컨텐츠가 앞뒤로 페이드 인-아웃되는
          페이지 트랜지션이 특징. Intersection
          Observer API를 활용해 구현.
        </div>

        <WorkCredits
          items={[
            "기획 Rebel9",
            "UI 디자인 김정욱",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        피크닉의 전시 '회사만들기' 에서 전시된
        레벨나인의 프로젝트 OpticalMe,
        PotentialMe의 일부로서 제작된 모바일 웹
        애플리케이션. 단계별 질문에 대한 답변이
        시리얼라이즈 된 바코드가 출력되며 리더기에
        인식시켜 디스플레이를 통해 자신의 유형을
        확인. 노이즈 필터 기반 마이크로 인터랙션
        적용.
        <WorkCredits
          items={[
            "기획 Rebel9",
            "프로젝트 관리 조근하",
            "UI 디자인 김정욱",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        <div>
          커머스 플랫폼 찹스틱스의 소비자용
          스토어프론트와 판매자용 상품 관리
          어드민을 초기 설계 및 개발. 상품 등록,
          상품 옵션, 재고 관리, 장바구니, 주문,
          결제 모듈 연동 등 플랫폼 핵심 기능의
          데이터 구조 설계와 구현을 담당.
        </div>

        <WorkCredits
          items={[
            "기획 클라이머스",
            "UI/UX 디자인 장혜진",
            "개발 이동규(FE), 최재영(FE), 설지우(BE)",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        <div>
          큐·스택 자료구조를 활용한 단어 퍼즐을
          탑재한 안드로이드 모바일 앱. React
          Native로 개발되었고 안드로이드
          플레이스토어에 배포하였으나 현재는 공개
          종료.
        </div>

        <WorkCredits
          items={[
            "기획 바닐라코딩",
            "UI/UX 디자인 이예지",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        <div>
          바닐라코딩 포털 서비스를
          기획·디자인·개발하였습니다. 코스 신청서
          작성·결제와 컨텐츠 확인 기능을
          제공합니다. Node.js fs API로 폴더 구조를
          컨텐츠 카테고리로 활용하고,
          remark/rehype로 Markdown을 파싱합니다.
        </div>

        <WorkCredits
          items={[
            "기획 바닐라코딩",
            "UI/UX 디자인, 개발 이동규",
          ]}
        />
      </>
    ),
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
    description: (
      <>
        <div>
          피크닉의 전시 '창문을 통해 어렴풋이' 에
          전시된 이미지 슬라이더. 인스타그램의
          해시태그 #saulleiterinspired 로 검색된
          이미지를 프록시 서버를 통해
          수집·캐싱하여 전시장 내 스크린에
          프로젝션.
        </div>

        <WorkCredits
          items={[
            "기획, 디자인 김대순",
            "개발 이동규",
          ]}
        />
      </>
    ),
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
