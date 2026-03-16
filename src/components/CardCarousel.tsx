import React, {
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

const CarouselContext = createContext<CarouselCtx | null>(null);

const useCarousel = () => {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("Must be used within CardCarousel");
  return ctx;
};

// --- Item ---

const Item = ({ children }: { children: ReactNode }) => (
  <ItemContainer>{children}</ItemContainer>
);

const ItemContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// --- Card ---

const Card = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <CardContainer style={style}>{children}</CardContainer>
);

const CardContainer = styled.div`
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 20px 30px;
`;

// --- Nav ---

const Nav = ({ style }: { style?: CSSProperties }) => {
  const { prev, next, currentIndex, total } = useCarousel();
  return (
    <NavContainer style={style}>
      <NavButton onClick={prev} disabled={currentIndex === 0}>
        <svg width="40" height="100" viewBox="0 0 40 100" fill="none">
          <polyline points="30,10 10,50 30,90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavButton>
      <NavButton onClick={next} disabled={currentIndex === total - 1}>
        <svg width="40" height="100" viewBox="0 0 40 100" fill="none">
          <polyline points="10,10 30,50 10,90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </NavButton>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  pointer-events: all;
  color: #333;

  &:disabled {
    opacity: 0.15;
    cursor: default;
  }
`;

// --- Main ---

const CardCarouselBase = ({ children }: { children: ReactNode }) => {
  let itemCount = 0;
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) itemCount++;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const next = () => setCurrentIndex((i) => Math.min(i + 1, itemCount - 1));

  let itemIdx = 0;
  const rendered = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Item) {
      return itemIdx++ === currentIndex ? child : null;
    }
    return child;
  });

  return (
    <CarouselContext.Provider value={{ currentIndex, total: itemCount, prev, next }}>
      {rendered}
    </CarouselContext.Provider>
  );
};

const CardCarousel = Object.assign(CardCarouselBase, { Item, Card, Nav });

export default CardCarousel;
