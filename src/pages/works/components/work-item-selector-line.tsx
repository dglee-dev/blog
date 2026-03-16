import { createPortal } from "react-dom";

import { HorizontalLine } from "@/shared/hooks/useHorizontalLine";
import { useWorkItemSelector } from "@/pages/works/components/work-item-selector";

const WorkItemSelectorLine = () => {
  const { lineRef } = useWorkItemSelector();

  return createPortal(
    <HorizontalLine
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        left: 0,
      }}
      thickness={50}
      color={"transparent"}
      ref={lineRef}
    />,
    document.body,
  );
};

export default WorkItemSelectorLine;
