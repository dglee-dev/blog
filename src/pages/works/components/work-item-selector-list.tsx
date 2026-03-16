import { last } from "lodash";
import styled from "styled-components/macro";

import { WithId } from "@/shared/types/utils";
import { WorkItem } from "@/pages/works/types";
import WorkListItem from "@/pages/works/components/work-list-item";
import { useWorkItemSelector } from "@/pages/works/components/work-item-selector";

interface Props {
  works: Array<WithId<WorkItem>>;
}

const WorkItemSelectorList = ({ works }: Props) => {
  const { registerTarget, touchingIds } = useWorkItemSelector();

  return (
    <ListContainer>
      {works.map((workItem) => (
        <WorkListItem
          key={workItem.id}
          workItem={workItem}
          ref={registerTarget(workItem.id)}
          selected={last(touchingIds) === workItem.id}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 200px;
  height: fit-content;
  margin-top: 40dvh;
  margin-bottom: 40dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;

export default WorkItemSelectorList;
