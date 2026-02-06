import React from "react";
import styled from "styled-components/macro";

import useViewportType from "@/hooks/useViewportType";

const Footer = () => {
  const { isMobile } = useViewportType();

  return (
    <Container>
      {isMobile ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "2em",
            paddingBottom: "2em",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            gap: "0.6em",

            fontWeight: "400",
            color: "#2f2f2f",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            nninnnin7@gmail.com
          </div>
          <div>
            © {new Date().getFullYear()} 이동규.
            All rights reserved.
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            borderTop: "1px solid #f4f4f4",
            paddingTop: "2em",
            paddingBottom: "2em",

            display: "flex",
            justifyContent: "space-between",
            fontWeight: "400",
            color: "black",
          }}
        >
          <span>
            © {new Date().getFullYear()} 이동규.
            All rights reserved.
          </span>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.3em",
            }}
          >
            <MailIcon /> nninnnin7@gmail.com
          </span>
        </div>
      )}
    </Container>
  );
};

const MailIcon = () => {
  return (
    <svg
      width="14px"
      height="14px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
        fill="black"
      />
    </svg>
  );
};

const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  font-weight: 500;

  scroll-snap-align: end;

  @media screen and (max-width: 480px) {
    height: 100svh;
    padding-right: 2em;
  }
`;

export default Footer;
