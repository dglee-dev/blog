import styled from "styled-components/macro";
import ProjectList from "./legacy-portfolio/components/ProjectList";

const WorksPage = () => {
  return (
    <Layout>
      <ProjectList />
      <Footer>
        <span>© {new Date().getFullYear()} Donggyu Lee. All rights reserved.</span>
      </Footer>
    </Layout>
  );
};

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  padding: 24px 1em 36px;
  border-top: 1px solid #e0e0e0;
  margin-top: 2em;

  font-size: 12px;
  color: #888;

  a {
    color: #888;
    text-decoration: none;

    &:hover {
      color: #333;
    }
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Spacer = styled.div`
  height: 48px;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Layout = styled.div`
  background-color: white;

  width: 100%;
  max-width: 240mm;

  margin: 0 auto;
  padding: 80px 1em 48px;

  @media only screen and (max-width: 480px) {
    min-height: 100dvh;
    height: 100dvh;

    overflow: auto;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    padding: 0;
  }
`;

export default WorksPage;
