import React from "react";
import styled from "styled-components/macro";

import FigmaIcon from "../icons/figma.svg";
import TypeScriptIcon from "../icons/ts.svg";
import GraphqlIcon from "../icons/graphql.svg";
import HookformImage from "../icons/hookform.png";
import NextjsIcon from "../icons/nextjs.svg";
import PortoneImage from "../icons/portone.webp";
import ReactIcon from "../icons/react.svg";
import ReactRouterIcon from "../icons/reactrouter.svg";
import JavaScriptIcon from "../icons/js.svg";
import NetlifyIcon from "../icons/netlify-new.svg";
import NodejsIcon from "../icons/nodejs.svg";
import HerokuIcon from "../icons/heroku.svg";
import ReactQueryIcon from "../icons/reactquery.svg";
import RecoilImage from "../icons/recoil.png";
import ApolloImage from "../icons/apollo.png";
import GatsbyIcon from "../icons/gatsby.svg";
import StrapiIcon from "../icons/strapi.svg";

export const Icons = {
  figma: FigmaIcon,
  typescript: TypeScriptIcon,
  graphql: GraphqlIcon,
  hookform: HookformImage,
  nextjs: NextjsIcon,
  portone: PortoneImage,
  react: ReactIcon,
  reactrouter: ReactRouterIcon,
  javascript: JavaScriptIcon,
  netlify: NetlifyIcon,
  nodejs: NodejsIcon,
  heroku: HerokuIcon,
  reactquery: ReactQueryIcon,
  recoil: RecoilImage,
  apollo: ApolloImage,
  gatsbyjs: GatsbyIcon,
  strapi: StrapiIcon,
};

export type IconKey = keyof typeof Icons;

const Badge = ({
  icon,
  children,
}: {
  icon: keyof typeof Icons;
  children: React.ReactNode;
}) => {
  return (
    <Container>
      <img alt={`${icon}-icon`} src={Icons[icon]} width={10} />
      {children}
    </Container>
  );
};

const Container = styled.span`
  color: #171717;
  background-color: white;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.12);

  display: flex;
  align-items: center;

  ${({ bgc, color }) => `
    ${
      bgc instanceof Array
        ? `background-image: linear-gradient(to right, ${bgc});`
        : `background-color: ${bgc};`
    };
    color: ${color};
  `};

  border-radius: 7px;
  padding: 6px;
  padding-left: 7px;
  padding-right: 8px;

  font-size: 10px;
  font-family: "Pretendard", "sans-serif";
  font-weight: 500;
  line-height: 11.2px;

  margin-right: 4px;
  margin-bottom: 4px;

  & > img {
    height: auto;
    margin-right: 4px;
  }
`;

export default Badge;
