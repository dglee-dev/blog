/* eslint-disable */
import GlobalStyle from "./GlobalStyle";
import Layout from "./Layout";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useViewportType from "./hooks/useViewportType";

function App() {
  const { isMobile } = useViewportType();

  return (
    <>
      <GlobalStyle />
      <Layout>
        {!isMobile && (
          <Header>
            이동규 프로젝트 포트폴리오
          </Header>
        )}

        <Resume />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
