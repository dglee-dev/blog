import React from "react";
import styled from "styled-components/macro";

const Header = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.h1`
  font-size: 2em;

  letter-spacing: 4px;
  font-weight: 700;

  padding: 12.8px;
  padding-top: 25.6px;
  padding-bottom: calc(25.6px + 12.8px);

  scroll-snap-align: start;

  @media only screen and (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }

  @media only screen and (max-height: 620px) {
    /* display: none; */
  }
`;

export default Header;
