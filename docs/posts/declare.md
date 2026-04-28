---
title: declare의 의미
publish: public
---

한국인으로서, `declare` 는 단순히 '선언하다' 로 해석할 때가 많다. 그래서 타입스크립트의 d.ts 파일을 만났을 때 `declare` 키워드를 만나면 타입을 '선언한다' 고 생각하게 된다.

하지만 declare는 가진 자산이나 소득, 세금을 '신고한다', 즉 누군가에게 내가 가진 것의 명세를 밝힌다는 의미로도 사용된다.

- Declare your annual income to the tax office.
- Politicians must declare their assets.
- List all the items you wish to declare.
- Failure to declare earnings can lead to a fine.

해당 의미를 가져와 타입스크립트의 `declare` 키워드를 해석해보면, d.ts 파일의 역할이 그러하듯 JavaScript로 작성된 코드를 타입스크립트에게 '신고한다', '명세를 보고해준다' 는 의미로 사용되고 있음을 알 수 있다.

```ts
// gray-matter.d.ts
declare function matter<
  I extends matter.Input,
  O extends matter.Option<I, O>,
  D extends matter.ParsedData,
>(
  input: I | { content: I },
  options?: O,
): matter.GrayMatterFile<I, D>;
```

해당 d.ts 파일에서 declare 구문을 사용해 순수 자바스크립트로 작성된 함수 `matter` 를 타입스크립트에게 '신고' 해주고 있음을 알 수 있다.
