---
title: Declaration Merging
publish: draft
---

gray-matter의 `matter` 의 인터페이스를 들여다보기 위해 `gray-matter.d.ts` 파일을 까보다가..

아래처럼 `declare`가 두 개 있는 것을 발견했고, 이것이 `Declaration Merging` 이라고 불리는 무언가라는 것을 알아냈다.

```ts
declare function matter<
  I extends matter.Input,
  O extends matter.GrayMatterOption<I, O>,
  D extends matter.ParsedData = matter.ParsedData,
>(
  input: I | { content: I },
  options?: O,
): matter.GrayMatterFile<I, D>;

declare namespace matter {
  export function stringify(
    file: string,
    data: object,
    options?: GrayMatterOption<string, O>,
  ): string;

  export function read(
    fp: string,
    options?: GrayMatterOption<string, O>,
  ): matter.GrayMatterFile<string, D>;
}
```

Declare Merging은 말 그대로 타입스크립트에게 자바스크립트 코드의 모양새를 알려주기 위해 작성된 declaration 들을 '병합' 해주는 타입스크립트의 기능이다. 예를 들어 위에서 본 matter의 두 declaration이 병합되면
