import { chain } from "lodash";

import {
  RouteBranch,
  TokenizedBranch,
} from "@/shared/lib/router/types/route-branch";
import { BranchToken } from "@/shared/lib/router/types/route-token";

export function tokenizeBranches(
  branches: RouteBranch[]
): TokenizedBranch[] {
  return branches.map((branch) => {
    return {
      ...branch,
      tokens: tokenize(
        branch.fullPath,
        branch.isIndex
      ),
    };
  });
}

export function tokenize(
  fullPath: string,
  isIndex = false
): BranchToken[] {
  if (isIndex)
    return [
      {
        kind: "empty",
      },
    ];

  const segments = chain(trimSlashes(fullPath))
    .split("/")
    .filter(Boolean)
    .value();

  const tokenized = segments.map((seg) => {
    if (seg === "*") {
      return { kind: "splat" };
    }

    if (seg.startsWith(":")) {
      return {
        kind: "dynamic",
        name: seg.slice(1), // remove ":"
      };
    }

    return { kind: "static", value: seg };
  }) as BranchToken[];

  return tokenized;
}

function trimSlashes(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}
