---
title: "웹팩에게 빌드타임에 파일 제공하기: `require.context`"
date: 2026-04-21
publish: public
---

나는 글을 파일 형태로 작성하고 관리하는 것을 좋아한다. 가장 완성도가 높은 네이티브 텍스트 에디터들(VSCode, Typora..)을 사용해 글을 작성할 수 있고, 파일의 형태로 관리되었을 때 DB 스키마에 맞추어 저장하는 것보다 다양한 환경에서 자유롭게 다루기에 편리하기 때문.

그래서 해당 블로그(dglee.dev)의 포스트들도 프로젝트 내부에 마크다운 파일로 작성되고 있는데, 클로드에게 이 파일들을 fetch할 수 있는 함수를 작성해달라고 부탁해서 사용중이었는데 이것을 업데이트하기 위해 확인해보니 아래와 같은 구현이었다.

```
// fetchPost.ts

import matter from "gray-matter";

export interface PostObject {
  Key: string;
  title: string;
  date: string;
  tags: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ctx = (require as any).context(
  "../../../../docs/posts",
  false,
  /\.md$/,
);

const isDev =
  process.env.NODE_ENV === "development";

const isVisible = (
  publish: string | undefined,
): boolean => {
  if (publish === "hidden") return false;
  if (publish === "draft") return isDev;
  return true; // public or undefined
};

const fetchPosts = (): Promise<PostObject[]> => {
  const posts: PostObject[] = ctx
    .keys()
    .flatMap((key: string) => {
      const raw = ctx(key) as string;
      const { data } = matter(raw);
      if (!isVisible(data.publish)) return [];
      const filename = key.replace("./", "");
      return [
        {
          Key: `posts/${filename}`,
          title:
            data.title ??
            filename.replace(".md", ""),
          date:
            data.date instanceof Date
              ? data.date
                  .toISOString()
                  .slice(0, 10)
              : data.date
                ? String(data.date).slice(0, 10)
                : "",
          tags: data.tags ?? [],
        },
      ];
    });

  posts.sort((a, b) =>
    a.date > b.date ? -1 : 1,
  );

  return Promise.resolve(posts);
};

export default fetchPosts;

```

먼저 타입 에러를 내뿜고있는 `(require as any).context` 에 눈이 가게 된다. 이건 도대체 뭘까.

require라 함은 Node.js의 그것이 아닌가? 근데 지금 내가 작성하고 있는 코드는 웹팩으로 빌드되어 클라이언트에서 작동되기로 기대되는 타입스크립트 코드이다. 게다가 .context? Node.js의 require 객체에는 저런 프로퍼티가 존재하지 않는다.

저 require는 웹팩의 API이다. 웹팩으로 번들링 될 때를 가정해서 작성된 코드이며, 빌드타임에 프로젝트의 특정 디렉터리의 모듈들을 동적으로(Regex 매칭을 활용) 불러와서 해당 모듈들을 런타임 시점에서 사용할 수 있도록 하는 기능을 한다.

현재의 코드에서는 빌드타임에 특정 디렉터리에 존재하는 .md 확장자를 가진 마크다운 파일들을 모두 불러와서 웹팩이 번들된 결과물에 해당 파일들의 내용을 모두 직접 포함시키고, 런타임에 해당 파일들을 활용할 수 있도록 만들어주기 위해 사용된다. 말하자면 섞어 주먹밥을 만들기 위한 코드라는 것.

코드를 이해했으니 거슬리는 타입에러를 해결해보자. TS 컴파일러는 단순히 `require` 라는 구문에 반응하여 `@types/node` 를 인스톨하라는 툴팁을 보여낸다. 하지만 우리는 이것이 webpack의 것이라는 것을 알기에 `@types/webpack-env` 를 깔고 tsconfig에 명시해 해당 require가 웹팩의 것임을 타입스크립트 컴파일러에게 알린다.

그렇게 타입 에러는 해결.

이 코드의 설계가 타당한지에 대해 생각해봤다. 먼저 require.context와 같은 문법에 익숙하지 않기도 하고, 번들링 된 결과물에 마크다운들을 우겨넣는다는 것이 찝찝하게 느껴진다. 빌드타임에 json파일로 분리해두고 런타임에 가져다 사용할수도 있겠다, 빌드타임 페칭을 담당하는 스크립트를 분리할수도 있겠다는 생각도 들었다. 개발자 입장에서 인지적으로 덜 부담이 되는 구현이 될 수 있겠으나 성능이나 실제적인 구조는 거의 비슷한 것이 된다. 일단은 그냥 두기로 했다.
