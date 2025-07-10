import { map } from "fxjs";
import { useMemo } from "react";
import { v4 as uuid } from "uuid";

type Item = Record<string, string>;

type Result = Partial<Item> & {
  id: string;
};

export default function useMapIds(
  list: Item[]
): Result[] {
  const result = useMemo<Result[]>(() => {
    const mappedList = map(
      (item: Item) => ({
        id: uuid(),
        ...item,
      }),
      list
    );

    return mappedList;
  }, [list]);

  return result;
}
