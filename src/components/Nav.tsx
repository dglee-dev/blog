import React from "react";
import styled from "styled-components/macro";
import useRouter from "@/shared/lib/router/hooks/useRouter";

const Nav = () => {
  const { navigate } = useRouter();

  return (
    <Container>
      <span onClick={() => navigate("/")}>
        이동규 블로그
      </span>

      <List>
        <span onClick={() => navigate("/posts")}>
          글
        </span>

        <span onClick={() => navigate("/works")}>
          작업
        </span>
      </List>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;

  height: var(--nav-height);

  box-sizing: border-box;

  padding: 16px;

  font-size: 1.5em;

  display: flex;
  justify-content: space-between;

  & a {
    text-decoration: none;
  }

  & span {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
`;

const List = styled.div`
  display: flex;
  gap: 1em;
`;

export default Nav;
