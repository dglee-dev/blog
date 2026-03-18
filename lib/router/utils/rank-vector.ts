import { TokenizedBranch } from "@/shared/lib/router/types/route-branch";
import { BranchToken } from "@/shared/lib/router/types/route-token";

type TokenScore = 0 | 1 | 2 | 3;

export function rankVector(
  branch: TokenizedBranch
) {
  const segmentSum = branch.tokens.reduce(
    (sum, token) => {
      return sum + scoreToken(token);
    },
    0
  );

  return [segmentSum];
}

function scoreToken(
  token: BranchToken
): TokenScore {
  if (token.kind === "static") return 3;
  if (token.kind === "dynamic") return 2;
  if (token.kind === "empty") return 1;

  return 0;
}
