import React from "react";
import styled from "styled-components/macro";

import GlobalStyle from "@/GlobalStyle";
import useRouter from "@/shared/lib/router/hooks/useRouter";

import WorksPage from "@/pages/Works";
import HomePage from "@/pages/Home";
import PostPage from "@/pages/posts";

import Nav from "@/components/Nav";
import NewPostPage from "@/pages/New";

function App() {
  const { routePath } = useRouter();

  return (
    <>
      <GlobalStyle />

      <Nav />

      <Container>
        {routePath === "/" && <HomePage />}
        {routePath === "/new" && <NewPostPage />}
        {routePath === "/posts" && <PostPage />}
        {routePath === "/works" && <WorksPage />}
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: var(--nav-height);
  transform: translateX(-50%);

  display: flex;
  justify-content: center;

  width: 100vw;
  height: calc(100dvh - var(--nav-height));
  overflow: scroll;

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
