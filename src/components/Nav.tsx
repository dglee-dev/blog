import styled from "styled-components/macro";
import useRouter from "@lib/router/hooks/useRouter";
import Prefetch from "@lib/router/components/Prefetch";
import fetchPosts from "@/features/posts/api/fetchPosts";

const Nav = () => {
  const { navigate } = useRouter();

  return (
    <Container>
      <NavTitle>DONGGYU LEE</NavTitle>

      <List>
        <Prefetch queryKey="posts" fetcher={fetchPosts}>
          <NavLink href="/posts" onClick={(e) => { e.preventDefault(); navigate("/posts"); }}>
            POSTS
          </NavLink>
        </Prefetch>

        <NavLink href="/works" onClick={(e) => { e.preventDefault(); navigate("/works"); }}>
          WORKS
        </NavLink>

        {/* <NavLink href="/demos" onClick={(e) => { e.preventDefault(); navigate("/demos"); }}>
          DEMOS
        </NavLink> */}
      </List>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  width: 100%;

  box-sizing: border-box;

  padding: 8px;
  padding-left: 16px;

  font-family: "Gravi", sans-serif;
  font-size: 15px;

  display: flex;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const List = styled.div`
  display: flex;
  gap: 1em;

  padding-right: 1.5em;
`;

const NavLink = styled.a``;

const NavTitle = styled.span``;

export default Nav;
