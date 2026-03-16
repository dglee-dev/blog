import { last } from "lodash";
import { useStore } from "zustand";
import styled from "styled-components/macro";

import { workItemStore } from "@/pages/works/store/work-items";
import { useWorkItemSelector } from "@/pages/works/components/work-item-selector";

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

const Description = () => {
  const work = useSelectedWork();
  return <DescriptionText>{work?.description}</DescriptionText>;
};

const WorkItemDetails = () => {
  return (
    <Container>
      <Title />
      <Description />
    </Container>
  );
};

WorkItemDetails.Title = Title;
WorkItemDetails.Description = Description;

const Container = styled.div``;

const TitleText = styled.div``;

const DescriptionText = styled.div``;

export default WorkItemDetails;
