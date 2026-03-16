import {
  createContext,
  useContext,
  useState,
  ReactNode,
  CSSProperties,
} from "react";
import styled from "styled-components/macro";

interface CarouselCtx {
  currentIndex: number;
  total: number;
  prev: () => void;
  next: () => void;
}

const CarouselContext =
  createContext<CarouselCtx | null>(null);

const useCarousel = () => {
  const ctx = useContext(CarouselContext);
  if (!ctx)
    throw new Error(
      "Must be used within CardCarousel",
    );
  return ctx;
};

// --- Item ---

const Item = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  const { currentIndex } = useCarousel();
  if (index !== currentIndex) return null;
  return (
    <ItemContainer>{children}</ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// --- Card ---

const Card = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) => (
  <CardContainer style={style}>
    {children}
  </CardContainer>
);

const CardContainer = styled.div`
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 20px 30px;
`;

// --- Nav ---

const Nav = ({
  style,
}: {
  style?: CSSProperties;
}) => {
  const { prev, next, currentIndex, total } =
    useCarousel();
  return (
    <>
      <NavButtonWrap
        style={style}
        $direction="left"
        $disabled={currentIndex === 0}
      >
        <NavButton
          onClick={prev}
          disabled={currentIndex === 0}
          $direction="left"
        >
          <svg
            width="40"
            height="100"
            viewBox="0 0 40 100"
            fill="none"
          >
            <polyline
              points="30,10 10,50 30,90"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavButton>
      </NavButtonWrap>

      <NavButtonWrap
        $direction="right"
        $disabled={currentIndex === total - 1}
      >
        <NavButton
          onClick={next}
          disabled={currentIndex === total - 1}
          $direction="right"
        >
          <svg
            width="40"
            height="100"
            viewBox="0 0 40 100"
            fill="none"
          >
            <polyline
              points="10,10 30,50 10,90"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavButton>
      </NavButtonWrap>
    </>
  );
};

const NavButtonWrap = styled.div<{
  $direction: "left" | "right";
  $disabled: boolean;
}>`
  position: fixed;
  top: 0;
  ${({ $direction }) =>
    $direction === "left" ? "left: 0;" : "right: 0;"}
  height: 100dvh;
  width: 30vw;
  pointer-events: all;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    ${({ $direction }) =>
      $direction === "left"
        ? "background: linear-gradient(to right, rgba(0,0,0,0.06), transparent);"
        : "background: linear-gradient(to left, rgba(0,0,0,0.06), transparent);"}
  }

  ${({ $disabled }) =>
    !$disabled &&
    `&:hover::before { opacity: 1; }`}
`;

const NavButton = styled.button<{
  $direction: "left" | "right";
}>`
  position: absolute;
  inset: 0;
  background: none;
  border: none;
  padding: 20px;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  ${({ $direction }) =>
    $direction === "left"
      ? "justify-content: flex-start;"
      : "justify-content: flex-end;"}

  &:disabled {
    opacity: 0.15;
    cursor: default;
  }
`;

// --- Main ---

const CardCarouselBase = ({
  total,
  children,
}: {
  total: number;
  children: ReactNode;
}) => {
  const [currentIndex, setCurrentIndex] =
    useState(0);
  const prev = () =>
    setCurrentIndex((i) => Math.max(i - 1, 0));
  const next = () =>
    setCurrentIndex((i) =>
      Math.min(i + 1, total - 1),
    );

  return (
    <CarouselContext.Provider
      value={{ currentIndex, total, prev, next }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

const CardCarousel = Object.assign(
  CardCarouselBase,
  { Item, Card, Nav },
);

export default CardCarousel;
