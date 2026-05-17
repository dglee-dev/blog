---
title: "`Namespace` in TypeScript"
publish: public
---

타입스크립트에서 Namespace란 뭘까?

타입스크립트 문서 [Namespace](https://www.typescriptlang.org/docs/handbook/namespaces.html) 섹션에서는 하나의 예제: a simple string validator 를 보여주며 설명을 시작한다.

```ts
interface StringValidator {
  isAcceptable(str: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
  isAcceptable(str: string) {
    return lettersRegexp.test(str);
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(str: string) {
    return numberRegexp.test(str);
  }
}

// Some samples to try
const strings = ["Hello", "98052", "101"];
const validators = {};

validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] =
  new LettersOnlyValidator();

for (let str of strings) {
  for (let name of validators) {
    let isMatch =
      validators[name].isAcceptable(str);

    console.log(
      `'${str}' ${isMatch ? "matches" : "does not match"} '${name}'.`,
    );
  }
}
```

여기에서 인터페이스와 클래스 선언부를 `namespace` 를 이용해 아래와 같이 고칠 수 있다.
타입스크립트의 namespace는 그냥 IIFE로 객체나 값을 캡슐화하는 방법을 신태틱 슈가로서 제공하는 것이다. 현대에는 사실상 쓸모가 없는 기능이다. 파일을 기반으로 네임스페이스를 정의하고 모듈화한 코드를 export/import를 통해 연결해 사용하고 번들러로 번들링하면 네임스페이스를 따로 관리할 필요가 없기 때문이다.

```ts
namespace Validation {
  export interface StringValidator {
    isAcceptable(str: string): boolean;
  }

  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(str: string) {
      return lettersRegexp.test(str);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(str: string) {
      return numberRegexp.test(str);
    }
  }
}
```

하지만 우리는 d.ts 파일에서 `declare namespace` 키워드를 자주 마주하게 된다. 이것은 Ambient Namespace라 불린다. 실제 기능하는 런타임 네임스페이스를 만드는 것은 아니고, 기존 레거시 자바스크립트에서 정의된 전역 객체 패턴으로 작성된 라이브러리를 네임스페이스라는 개념으로 정리해서 타입 수준에서 구조화 해 표현하고 타입스크립트 코드베이스에 편입시켜 안전하게 사용할 수 있도록 만드는 방법이다.

아래는 공식 문서에서 발췌한 `Ambient Namespace` 예제이다.  
d3라는 라이브러리를 네임스페이스로 정의해 타입으로서 구조화하고 있다.

```ts
declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection;
      (element: EventTarget): Selection;
    };
  }
  export interface Event {
    x: number;
    y: number;
  }
  export interface Base extends Selectors {
    event: Event;
  }
}

declare var d3: D3.Base;
```
