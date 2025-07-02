import React from "react";
import styled from "styled-components/macro";

import GlobalStyle from "@/GlobalStyle";
import Nav from "@/components/Nav";
import WorksPage from "@/pages/Works";
import useRouter from "@/shared/lib/router/hooks/useRouter";

function App() {
  const { routePath } = useRouter();

  const isMobile = window.innerWidth <= 480;

  return (
    <>
      <GlobalStyle />

      {!isMobile && <Nav />}

      <Container>
        {routePath === "/works" && <WorksPage />}
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: white;

  max-width: 240mm;
  min-height: 100vh;

  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    height: 100svh;
    overflow: auto;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media only screen and (min-width: 481px) {
  }
`;

export default App;
