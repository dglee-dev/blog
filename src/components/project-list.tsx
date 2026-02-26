import React from "react";
import styled, { css } from "styled-components/macro";

import TechStack from "@/components/TechStack";
import MobileList from "@/components/MobileList";
import useViewportType from "@/hooks/useViewportType";
import useProjects from "@/hooks/use-projects";
import { ProjectItem } from "@/data/projects";

const ProjectList = () => {
  const { isMobile } = useViewportType();
  const { projects } = useProjects();

  return (
    <>
      <Section>
        {isMobile && <MobileList />}
      </Section>

      {projects.map((project: ProjectItem) => (
        <Section key={project.id}>
          <div className="desc">
            <h1>
              {project.titleHref ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.titleHref}
                >
                  {project.title}
                </a>
              ) : (
                project.title
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

const Section = styled.div`
  margin-bottom: 2em;

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
