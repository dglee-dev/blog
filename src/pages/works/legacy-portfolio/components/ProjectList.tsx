import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components/macro";

import TechStack from "./TechStack";
import MobileList from "./MobileList";
import useViewportType from "@/shared/hooks/useViewportType";
import useProjects from "../hooks/use-projects";
import { ProjectItem } from "../data/projects";

const ProjectList = () => {
  const { isMobile } = useViewportType();
  const { projects } = useProjects();
  const indexRef = useRef<HTMLDivElement>(null);
  const [indexVisible, setIndexVisible] = useState(true);

  useEffect(() => {
    if (!indexRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIndexVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(indexRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Section ref={indexRef}>
        {isMobile && <MobileList projects={projects} />}
      </Section>

      {isMobile && !indexVisible && (
        <BackToIndex onClick={() => indexRef.current?.scrollIntoView({ behavior: "smooth" })}>
          BACK TO INDEX
        </BackToIndex>
      )}

      {projects.map((project: ProjectItem) => (
        <Section key={project.id} id={project.id}>
          <div className="desc">
            <h1>
              {project.title}
              {project.titleHref && (
                <LinkIcon
                  href={project.titleHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </LinkIcon>
              )}
            </h1>
            {project.description}
            {project.techStack && (
              <TechStack stacks={project.techStack} />
            )}
          </div>

          {project.media.type === "video" ? (
            <Video
              autoPlay
              loop
              muted
              playsInline
              style={project.media.style}
            >
              <source src={project.media.src} type="video/mp4" />
            </Video>
          ) : (
            <Image
              alt={project.media.alt}
              src={project.media.src}
              style={project.media.style}
            />
          )}
        </Section>
      ))}
    </>
  );
};

const BackToIndex = styled.button`
  position: fixed;
  bottom: 5px;
  right: 5px;
  background: none;
  border: none;
  padding: 0;
  font-family: "Gravi", sans-serif;
  font-size: 15px;
  cursor: pointer;
  color: inherit;
`;

const LinkIcon = styled.a`
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  color: #000;
  vertical-align: -0.1em;
`;

const Section = styled.div`
  margin-bottom: 2em;

  a {
    color: inherit;
  }

  h1 {
    font-size: 1.2em;
    font-weight: 500;
  }

  p {
    padding-right: 1em;
    word-break: keep-all;
    text-align: left;
  }

  @media only screen and (max-width: 480px) {
    min-height: 100dvh;
    max-height: 100dvh;
    height: 100dvh;

    margin-top: 0;

    padding-left: 2em !important;
    padding-right: 2em !important;

    display: flex;
    flex-direction: column;
    justify-content: center;

    scroll-snap-align: start;

    img,
    video {
      max-height: 40svh;
    }

    h1 {
      margin-top: -20px;
      font-size: min(3vh, 5vw) !important;
    }

    p {
      font-size: min(2vh, 3.5vw);
    }
  }

  @media only screen and (min-width: 481px) {
    display: flex;

    .desc {
      flex: 0.6;
      min-width: 360px;
      padding: 1em;
      padding-top: 0;

      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 1.4em;
      margin-bottom: 1.2em;
      margin-left: 0;
      text-align: left;
    }

    p {
      padding-right: 0;
    }

    .desc {
      text-align: left;
    }

    padding: 0;
  }
`;

const mediaStyle = css`
  background-color: black;

  flex: 1;
  width: 300px;
  height: 300px;

  @media only screen and (max-width: 480px) {
    margin-top: 16px;
    width: 100%;
  }
`;

const Image = styled.img`
  ${mediaStyle}
`;

const Video = styled.video`
  ${mediaStyle}
  object-fit: cover;
`;

export default ProjectList;
