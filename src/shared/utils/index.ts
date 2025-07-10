import { WithId } from "@/shared/types/utils";
import { nanoid } from "nanoid";

export const mapListId = <Item>(
  list: Array<Item>
): Array<WithId<Item>> => {
  return list.map(addId);
};

export const addId = <Item>(
  obj: Item
): WithId<Item> => {
  return {
    ...obj,
    id: nanoid(),
  };
};
