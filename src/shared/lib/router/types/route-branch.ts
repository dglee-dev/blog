import { BranchToken } from "@/shared/lib/router/types/route-token";

export type RouteBranch = {
  fullPath: string;
  isIndex: boolean;
  order: number;
  id: string;
  parentId: string;
};

export type TokenizedBranch = RouteBranch & {
  tokens: BranchToken[];
};
