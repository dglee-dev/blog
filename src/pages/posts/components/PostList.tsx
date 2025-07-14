import React from "react";
import styled from "styled-components/macro";

const PostList = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PostList.Container>
      {children}
    </PostList.Container>
  );
};

PostList.Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

PostList.Item = ({
  title,
  href,
}: {
  title: string;
  href?: string;
}) => {
  return (
    <li
      style={{
        fontSize: "16px",
        listStyle: "none",
      }}
    >
      <a href={href}>{title}</a>
    </li>
  );
};

export default PostList;
