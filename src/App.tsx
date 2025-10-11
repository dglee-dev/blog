import styled from "styled-components/macro";

import GlobalStyle from "@/GlobalStyle";
import useRouter from "@/shared/lib/router/hooks/useRouter";

import WorksPage from "@/pages/works";
import HomePage from "@/pages/Home";
import PostPage from "@/pages/posts";

import Nav from "@/components/Nav";
import PostDetails from "@/pages/posts/components/PostDetails";
import Route from "@/shared/lib/router/components/Route";
import Routes from "@/shared/lib/router/components/Routes";

function App() {
  const { routePath } = useRouter();

  return (
    <>
      <GlobalStyle />

      <Nav />

      <Container>
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
