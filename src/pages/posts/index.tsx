import PostList from "@/pages/posts/components/PostList";
import React from "react";

const PostPage = () => {
  return (
    <div id="post-container">
      <PostList>
        <PostList.Item
          title="7월 둘째 주 읽기 자료"
          href="/posts/july-second-weekly-readings"
        />
      </PostList>
    </div>
  );
};

export default PostPage;
