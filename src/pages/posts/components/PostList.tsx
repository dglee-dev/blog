import React from "react";

const PostList = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div>{children}</div>;
};

PostList.Item = ({
  title,
  href,
}: {
  title: string;
  href?: string;
}) => {
  return (
    <li>
      <a href={href}>{title}</a>
    </li>
  );
};

export default PostList;
