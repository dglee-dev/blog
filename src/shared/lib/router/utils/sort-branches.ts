import { TokenizedBranch } from "@/shared/lib/router/types/route-branch";
import { rankVector } from "@/shared/lib/router/utils/rank-vector";

export function sortBranches(
  tokenizedBranches: TokenizedBranch[]
) {
  const toBeSort = [...tokenizedBranches];

  return toBeSort.sort((branchA, branchB) => {
    // index 브랜치의 경우 우선순위로 정렬
    if (branchA.parentId === branchB.parentId) {
      return branchA.isIndex ? -1 : 1;
    }

    const rankVectorA = rankVector(branchA);
    const rankVectorB = rankVector(branchB);

    for (
      let i = 0;
      i <
      Math.max(
        rankVectorA.length,
        rankVectorB.length
      );
      i++
    ) {
      const scoreA = rankVectorA[i] ?? -1e9;
      const scoreB = rankVectorB[i] ?? -1e9;

      const diff = scoreB - scoreA;

      if (diff !== 0) return diff;
    }

    // 타이브레이크 시 선언순서로 오름차순 정렬
    return branchA.order - branchB.order;
  });
}
