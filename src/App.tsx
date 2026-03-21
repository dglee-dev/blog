import styled from "styled-components/macro";

import GlobalStyle from "@/GlobalStyle";

import WorksPage from "@/pages/works";
import HomePage from "@/pages/Home";
import PostPage from "@/pages/posts";

import Nav from "@/components/Nav";
import PostDetails from "@/features/posts/components/PostDetails";
import Route from "@lib/router/components/Route";
import Routes from "@lib/router/components/Routes";
import { PrefetchCacheProvider } from "@lib/router/context/PrefetchCacheContext";

function App() {
  return (
    <PrefetchCacheProvider>
      <GlobalStyle />

      <Nav />

      <Container id="app-container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/posts"
            element={<PostPage />}
          />
          <Route
            path="/posts/:postId"
            element={<PostDetails />}
          />
          <Route
            path="/works"
            element={<WorksPage />}
          />
        </Routes>
      </Container>
    </PrefetchCacheProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: calc(100dvh);
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
