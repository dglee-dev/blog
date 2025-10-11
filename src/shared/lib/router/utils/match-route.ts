import { TokenizedBranch } from "@/shared/lib/router/types/route-branch";

type MatchedParams = Record<string, string>;

type MatchedRoute = {
  branch: TokenizedBranch;
  params: MatchedParams;
};

export const matchRoute = (
  currentPath,
  branches: Array<TokenizedBranch>
): MatchedRoute => {
  for (let i = 0; i < branches.length; i++) {
    const branch = branches[i];
    const matched = matchBranch(
      currentPath,
      branch
    );

    if (matched) {
      return {
        branch,
        params: matched,
      };
    }
  }
};

export const matchBranch = (
  currentPath: string,
  branch: TokenizedBranch
): MatchedParams | null => {
  const matchedParams = {};

  if (branch.isIndex) {
    return isSamePath(
      currentPath,
      branch.fullPath
    )
      ? matchedParams
      : null;
  }

  // 인덱스가 아닌 경우는 무엇이 있지?
  // splat, static, dynamic 의 조합..
  const pathSegments = splitPath(currentPath);

  // 라우트가 splat을 포함하지 않았는데 길이가 다른 경우는 바로 탈락
  if (
    !branch.tokens.some((t) => t.kind === "splat")
  ) {
    if (
      pathSegments.length !== branch.tokens.length
    )
      return null;
  }

  // 이들의 매칭을 확인하려면?
  // 'token' <= 비교의 기준이 된다
  // 토큰들을 세그먼트와 순서대로 비교해 나가면서 '매칭이 불가능한가?' 만을 판단하면 된다. 가능하다면 matchedResult에 관련 정보를 넣어준다.
  for (let i = 0; i < branch.tokens.length; i++) {
    const pathSegment = pathSegments[i];
    const branchToken = branch.tokens[i];

    if (branchToken.kind === "static") {
      if (pathSegment !== branchToken.value)
        return matchFailed();
    } else if (branchToken.kind === "dynamic") {
      if (pathSegment == null) {
        return matchFailed();
      }

      matchedParams[branchToken.name] =
        decodeURIComponent(pathSegment);
    } else if (branchToken.kind === "splat") {
      const remaining = pathSegments
        .slice(i)
        .join("/");

      matchedParams["*"] =
        decodeURIComponent(remaining);
    } else {
      // 앞에서 splat처리되지 않았는데 매칭할 수 있는 토큰이 없는 경우
      return null;
    }
  }

  return matchedParams;
};

function matchFailed() {
  return null;
}

function splitPath(pathname) {
  const trimmed = trimSlashes(pathname);

  return trimmed ? trimmed.split("/") : [];
}

function isSamePath(one, another) {
  return (
    trimSlashes(one) === trimSlashes(another)
  );
}

function trimSlashes(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}
