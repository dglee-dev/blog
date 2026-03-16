import { last } from "lodash";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import { workItemStore } from "@/pages/works/store/work-items";
import { useWorkItemSelector } from "@/pages/works/components/work-item-selector";
import { PROJECT_LIST_WIDTH } from "@/pages/works/constants";
import { DETAILS_MARGIN_LEFT } from "@/pages/works/constants/index";

const useSelectedWork = () => {
  const { works } = useStore(workItemStore);
  const { touchingIds } = useWorkItemSelector();
  const selectedId = last(touchingIds);
  return works.find((w) => w.id === selectedId);
};

const Title = () => {
  const work = useSelectedWork();
  return <TitleText>{work?.title}</TitleText>;
};

const Subtitle = () => {
  const work = useSelectedWork();
  return (
    <SubtitleText>{work?.subtitle}</SubtitleText>
  );
};

const Description = () => {
  const work = useSelectedWork();

  return (
    <DescriptionContainer>
      <DescriptionText>
        {work?.description}
      </DescriptionText>
    </DescriptionContainer>
  );
};

const WorkItemDetails = () => {
  return (
    <Container>
      <Title />
      <Subtitle />
    </Container>
  );
};

WorkItemDetails.Title = Title;
WorkItemDetails.Subtitle = Subtitle;
WorkItemDetails.Description = Description;

const Container = styled.div``;

const TitleText = styled.div``;

const SubtitleText = styled.div``;

const DescriptionContainer = styled.div`
  word-break: keep-all;
  pointer-events: none;

  width: ${`calc(400px - ${DETAILS_MARGIN_LEFT}px)`};
  /* background-color: yellow; */

  position: fixed;
  right: 50%;
  transform: ${`translate(calc(100% + ${PROJECT_LIST_WIDTH / 2 + DETAILS_MARGIN_LEFT}px))`};

  top: 45%;
`;

const DescriptionText = styled.div`
  font-size: 1em;
  line-height: 1.5em;
`;

export default WorkItemDetails;
