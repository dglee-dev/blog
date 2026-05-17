---
date: 2025-09-03
title: 'CJS와 ESM의 interoperability'
tags: Node.js
publish: draft

---

CJS, ESM의 모듈 공개 방식을 차례로 알아보고, 이들간의 상호호환성(interoperability)에 대해서도 알아본다. 현대의 대표적인 모듈 공개 방식과 이들간의 상호 호환성이 왜 필요한지, 어떻게 가능한지에 대해 이해해보고자 포스트를 작성한다.



## 1. CJS의 module.exports

Node.js의 CommonJS(CJS)에서는 `module.exports` 를 통해 하나의 모듈에서는 하나의 기본 객체만 바깥으로 공개할 수 있다.

```tsx
// something.js
const something = { name: "someName" };

module.exports = something;
```

```tsx
const something = require('something.js');

console.log(something); // { name: "someName" };
```

## 2. ESM의 export default

ESM은 `export default` 를 통해 모듈마다 1개의 기본 객체를 공개할 수 있음은 물론이고 CJS와는 달리 `named export` 라는 것으로 여러개의 변수나 함수를 바깥으로 공개할 수 있다. 

```tsx
const myName = 'Justin';

export const name = myName;
export const age = 20;
export const sayMyName = () => { console.log(myName); };

export default { name: myName };
```

## 3. exports.default?

그렇다면 `exports.default` 란 무엇인가?

먼저 `exports` 는 CJS의 `module.exports` 를 가리키는 참조값이다.

```tsx
module.exports.myName = "Justin";

console.log(module.exports); // { myName: "Justin" }
console.log(exports); // { myName: "Justin" }
console.log(module.exports === exports); // true
```

그렇다면 `exports.default` 는 `module.exports.default` 를 의미하는데, 이것은 사실 개발자가 직접 작성할 일은 없는 코드로서, 바벨과 같은 트랜스파일러가 **ESM을 CJS로 트랜스파일 할 때** 나타난다. 왜 ESM을 CJS로 트랜스파일 하느냐고? 그건 모듈의 작성자가 해당 모듈을 `require` 로 가져오고 싶어하는 사용자들을 위해, ‘나는 ESM으로 작성했지만 CJS로도 쓸 수 있게 해줄게’ 하고 친절을 베푸는 것이다.

(하지만 query-string, d3.js, chalk와 같은 라이브러리들은 CJS 지원을 중단하고 ESM만으로 배포하고 있으며, 다른 여러 라이브러리들도 이러한 추세에 동참하고 있다. 유지보수가 힘들고 CJS 특성상 정적 분석을 할 수 없어 트리쉐이킹 등을 지원할 수 없기 때문. 점차 ESM을 베이스라인으로 인식시켜 나가는 분위기이다.)

어찌 되었든 아직도 누군가는 레거시 소비자에 대한 배려를 유지하며 ESM을 CJS로 트랜스파일해 제공하고 있다. 그럼 다시 돌아와서, ESM을 CJS로 컴파일 할 때 `module.exports.default` 라는 것은 왜 생겨나는가? 그것은 CJS에는 없는 named export를 default export와 함께 하나의 모듈로 표현하기 위함이다.

```tsx
// ESM module

// named export
export const age = 30;

// default export
export default { name: "Justin" };
```

```tsx
// Transpiled with Babel
exports.age = 30;
exports.default = { name: "Justin" };
```

```tsx
// Use with CJS require
const Justin = require("person.js");

console.log(Justin); // { default: { name: "Justin" }, age: 30 }
```

위에서 언급했듯이 여러개의 named export가 가능한 ESM과 달리 CJS는 `module.exports` 라는 하나의 객체만을 외부로 공개할 수 있다. 따라서 ESM의 named export 를 CJS와 호환되는 형태로 구현하기 위해, ESM의 `export default` 로 표현된 default 모듈 익스포트는 default 프로퍼티를 사용해 할당하고 나머지 named exports들도 export 객체에 함께 나열하는 것이다. 이 과정에서 `exports.default` 라는 프로퍼티가 생겨나는 것이다.

## 4. Interoperability

아하, 그렇군!

그렇다면 마지막으로 CJS로 트랜스파일된 코드가 **사용될 때** 벌어지는 일에 대해 알아보고 글을 마무리하려고 한다. 조금 더 구체적인 이해를 위해 몇 가지 수학적 유틸리티를 제공하는 모듈 `math.js` 을 가정해보자.

```tsx
// math.js
export const PI = 3.14;

export function area(r) {
  return PI * r * r;
}

export default class Square {
  constructor(width) {
    this.width = width;
  }
  area() {
    return this.width * this.width;
  }
}
```

해당 코드를 바벨을 이용해 CJS로 트랜스파일하면 다음과 같은 결과를 얻을 수 있다.

```tsx
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.area = area;
exports.PI = void 0;
exports["default"] = void 0;

const PI = 3.14;
exports.PI = PI;

function area(r) {
  return PI * r * r;
}

class Square {
  constructor(width) {
    this.width = width;
  }
  area() {
    return this.width * this.width;
  }
}

var _default = Square;
exports["default"] = _default;
```

여기에서의 학습 포인트는 바로 이 모듈을 **소비할 때의 호환성(interoperability, interop)**에 있다.

트랜스파일 된 모듈의 경로가 `dist/math.js` 라고 하자.

CJS로 트랜스파일 된 것이므로, 당연히 require의 결과는 Square일 것으로 기대된다.

```tsx
const Square = require('/dist/math.js');
```

하지만 Square는 `class Square` 가 아니라 `{ default: Square }` 이다. 이유는 이전의 exports.default 파트에서 알아보았듯, 트랜스파일 중 ESM의 named exports를 구현하기 위해 export default는 exports.default로, export function area는 exports.area 등과 같은 형태로 변환되기 때문이다.

```tsx
import Square, { area } from '/dist/math.js'
```

CJS로 변환된 것이므로 이렇게 esm default import와 named import가 불가능 한 것은 당연하다. 만약 named import가 없다 해도, require에서와 동일한 이유로 Square에는 { default: Square } 가 들어있다.

이러한 문제를 해결해주는 것이 interop 옵션인데, 타입스크립트를 통해 컴파일 할 때에는 `esInterop` 옵션을 통해 조정할 수 있으며 바벨을 통해 트랜스파일 할 때에는 `noInterop` 옵션을 통해 가능하다. 사실은 기본적으로 interop은 디폴트 옵션이다. 사용자가 끄지 않는 이상, cjs로 컴파일 된 코드는 require / import 방식 모두에서 named import 까지 자연스럽게 가능하다.

우리가 위에서 확인했던 트랜스파일 된 코드에는 interop이 적용되어 있지 않았다. interop을 적용한 코드는 간략하게 다음과 같은 형태를 띈다. `interopRequireDefault` 의 역할을 살펴보자. (간략한 코드를 확인하기 위해 의도적으로 named export는 없는 코드를 트랜스파일 하였다)

```tsx
"use strict";

var _Math = _interopRequireDefault(require("./Math.js"));

function _interopRequireDefault(e) {
	return e && e.__esModule ? e : { "default": e }; 
}

(function () {
  console.log("Square:", _Math["default"]);
})();
```

`__esModule` 이라는 플래그가 존재하면 객체를 그대로 내보내고, 그렇지 않다면 default라는 이름을 붙여 내보내는 것을 알 수 있다. 플래그가 붙어있다면 해당 모듈은 ESM에서 CJS로 컴파일 된 것이므로 

---

### References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- https://changelog.com/jsparty/137?utm_source=chatgpt.com
- https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1