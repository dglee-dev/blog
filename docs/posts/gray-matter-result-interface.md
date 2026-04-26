---
title: `gray-matter` 의 파싱 결과물 타입 설정
---

```ts
const { data } = matter(raw);
const frontmatter = data as PostFrontmatter;
```

이렇게 assertion만 가능한건지 클로드에게 물었더니 다음과 같은 답변을 얻었다.

> 안타깝게도 GrayMatterFile의 data가 제네릭 없이 { [key: string]: any }로 하드코딩되어 있습니다. 함수 시그니처에 제네릭 I, O가 있긴 한데 이건 input/options 타입이고 data에는 전달이 안 됩니다. 라이브러리 설계 실수라고 볼 수 있죠.
>
> 그래서 현재 방식(as PostFrontmatter)이 사실상 최선이고, 더 깔끔하게 쓰고 싶으면 wrapper를 두는 방법밖에 없습니다:
>
> ```
> const parseFrontmatter = (raw: string) =>
>  matter(raw).data as PostFrontmatter;
> ```

이 답변과, matter에 마우스를 올렸을 때 보여지는 다음의 툴팁을 이해하는 것이 먼저라는 생각이 들었다.

```ts
(alias) matter<string, matter.GrayMatterOption<string, unknown>>(input: string | {
    content: string;
}, options?: matter.GrayMatterOption<string, unknown> | undefined): matter.GrayMatterFile<string>
import matter
Takes a string or object with content property, extracts and parses front-matter from the string, then returns an object with data, content and other useful properties.

var matter = require('gray-matter');
console.log(matter('---\ntitle: Home\n---\nOther stuff'));
//=> { data: { title: 'Home'}, content: 'Other stuff' }

@param input — String, or object with content string

@param options

@api — public
```
