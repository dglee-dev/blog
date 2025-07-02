import React from "react";
import styled from "styled-components/macro";
import useRouter from "@/shared/lib/router/hooks/useRouter";

const Nav = () => {
  const { navigate } = useRouter();

  return (
    <Container>
      <li onClick={() => navigate("/")}>
        이동규 블로그
      </li>

      <List>
        <li onClick={() => navigate("/posts")}>
          글
        </li>

        <li onClick={() => navigate("/works")}>
          작업
        </li>
      </List>
    </Container>
  );
};

const Container = styled.div`
  padding: 1em;
  margin-bottom: 2em;

  font-size: 1.5em;

  display: flex;
  justify-content: space-between;

  & a {
    text-decoration: none;
  }
`;

const List = styled.ul`
  display: flex;
`;

export default Nav;
