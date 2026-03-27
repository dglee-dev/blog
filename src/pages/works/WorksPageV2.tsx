import { useStore } from "zustand";
import styled from "styled-components/macro";

import { workItemStore } from "@/pages/works/store/work-items";
import WorkItemSelector from "@/pages/works/components/work-item-selector";
import WorkItemSelectorList from "@/pages/works/components/work-item-selector-list";
import WorkItemSelectorLine from "@/pages/works/components/work-item-selector-line";
import WorkItemTitle from "@/pages/works/components/work-item-title";
import WorkItemDetails from "@/pages/works/components/work-item-details";
import WorksMobileIndex from "@/pages/works/components/works-mobile-index";

const WorksPage = () => {
  const { works } = useStore(workItemStore);

  return (
    <Container>
      <MobileOnly>
        <WorksMobileIndex works={works} />
      </MobileOnly>

      <DesktopOnly>
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
      </DesktopOnly>
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

const MobileOnly = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DesktopOnly = styled.div`
  display: contents;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default WorksPage;
