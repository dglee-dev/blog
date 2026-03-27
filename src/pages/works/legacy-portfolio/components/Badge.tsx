import React from "react";
import styled from "styled-components/macro";

import FigmaIcon from "@/shared/icons/figma.svg";
import TypeScriptIcon from "@/shared/icons/ts.svg";
import GraphqlIcon from "@/shared/icons/graphql.svg";
import HookformImage from "@/shared/icons/hookform.png";
import NextjsIcon from "@/shared/icons/nextjs.svg";
import PortoneImage from "@/shared/icons/portone.webp";
import ReactIcon from "@/shared/icons/react.svg";
import ReactRouterIcon from "@/shared/icons/reactrouter.svg";
import JavaScriptIcon from "@/shared/icons/js.svg";
import NetlifyIcon from "@/shared/icons/netlify-new.svg";
import NodejsIcon from "@/shared/icons/nodejs.svg";
import HerokuIcon from "@/shared/icons/heroku.svg";
import ReactQueryIcon from "@/shared/icons/reactquery.svg";
import RecoilImage from "@/shared/icons/recoil.png";
import ApolloImage from "@/shared/icons/apollo.png";
import GatsbyIcon from "@/shared/icons/gatsby.svg";
import StrapiIcon from "@/shared/icons/strapi.svg";

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
