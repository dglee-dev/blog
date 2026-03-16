import { createContext, useContext } from "react";

import {
  useHorizontalLine,
} from "@/shared/hooks/useHorizontalLine";

interface WorkItemSelectorContextValue {
  lineRef: ReturnType<typeof useHorizontalLine>["lineRef"];
  registerTarget: ReturnType<typeof useHorizontalLine>["registerTarget"];
  touchingIds: string[];
}

const WorkItemSelectorContext =
  createContext<WorkItemSelectorContextValue | null>(null);

export const useWorkItemSelector = () => {
  const ctx = useContext(WorkItemSelectorContext);
  if (!ctx) throw new Error("useWorkItemSelector must be used within WorkItemSelector");
  return ctx;
};

const WorkItemSelector = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { lineRef, registerTarget, touchingIds } =
    useHorizontalLine();

  return (
    <WorkItemSelectorContext.Provider
      value={{ lineRef, registerTarget, touchingIds }}
    >
      {children}
    </WorkItemSelectorContext.Provider>
  );
};

export default WorkItemSelector;
