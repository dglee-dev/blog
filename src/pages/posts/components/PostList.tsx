import useRouter from "@/shared/lib/router/hooks/useRouter";
import { Path } from "@/shared/types/utils";
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
  const router = useRouter();

  return (
    <li
      style={{
        fontSize: "16px",
        listStyle: "none",
      }}
      onClick={() => {
        if (href) router.navigate(href as Path);
      }}
    >
      {title}
    </li>
  );
};

export default PostList;
