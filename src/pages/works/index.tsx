import { useStore } from "zustand";
import styled from "styled-components/macro";

import { workItemStore } from "@/pages/works/store/work-items";
import WorkItemSelector from "@/pages/works/components/work-item-selector";
import WorkItemSelectorList from "@/pages/works/components/work-item-selector-list";
import WorkItemSelectorLine from "@/pages/works/components/work-item-selector-line";
import WorkItemTitle from "@/pages/works/components/work-item-title";
import WorkItemDetails from "@/pages/works/components/work-item-details";

const WorksPage = () => {
  const { works } = useStore(workItemStore);

  return (
    <Container>
      <WorkItemSelector>
        <div
          style={{
            // backgroundColor: "violet",
            display: "flex",
          }}
        >
          <WorkItemTitle />
          <WorkItemSelectorList works={works} />
          <WorkItemDetails.Description />
        </div>

        <WorkItemSelectorLine />
      </WorkItemSelector>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  overflow-y: auto;

  /* background-color: orange; */
`;

export default WorksPage;
