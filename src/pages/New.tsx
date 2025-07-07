import React from "react";
import styled from "styled-components/macro";

const NewPostPage = () => {
  return <Editor contentEditable></Editor>;
};

const Editor = styled.div`
  min-width: 500px;
  height: 50vh;

  background-color: red;
`;

export default NewPostPage;
