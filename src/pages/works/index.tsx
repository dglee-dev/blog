import { useStore } from "zustand";

import { workItemStore } from "@/pages/works/store/work-items";
import WorkItemSelector from "@/pages/works/components/work-item-selector";
import WorkItemSelectorList from "@/pages/works/components/work-item-selector-list";
import WorkItemSelectorLine from "@/pages/works/components/work-item-selector-line";
import WorkItemTitle from "@/pages/works/components/work-item-title";

const WorksPage = () => {
  const { works } = useStore(workItemStore);

  return (
    <WorkItemSelector>
      <WorkItemSelectorList works={works} />
      <WorkItemSelectorLine />
      <WorkItemTitle />
    </WorkItemSelector>
  );
};

export default WorksPage;
