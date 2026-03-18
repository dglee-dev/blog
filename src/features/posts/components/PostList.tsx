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
  padding: 48px 0;
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

PostList.SkeletonItem = styled.li`
  list-style: none;
  height: 16px;
  width: 40%;
  background: #e0e0e0;
  border-radius: 4px;
`;

export default PostList;
