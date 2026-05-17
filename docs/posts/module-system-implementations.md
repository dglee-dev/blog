---
title: "모듈 시리즈 2: 모듈 시스템의 설계와 구현"
publish: draft
date: 2026-05-16
---

각 라이브러리의 모듈시스템 설계와 구현을 비교한다.

## YUI2

YUI2에서는 모듈의 구현과 메타데이터가 분리되어 있다.

```js
// animation.js
YAHOO.util.Anim = function () {
  this.animate = function () { ... };
}
```

```js
// yui-loader.js
var moduleInfo = {
  animation: {
    path: "animation.js",
    requires: ["dom", "event"],
  },
};
```

> animation이라는 모듈은 `animation.js` 파일에 있고, 'dom'과 'event' 라는 의존성을 필요로 한다

는 모듈의 의존성 정보를 담은 메타데이터.

## YUI3

YUI3에서는 YUI2에서 분리되어 있던 모듈의 구현과 메타데이터가 하나로 합쳐지게 되었다.

```js
YUI.add(
  "anim-base",
  function (Y) {
    Y.Anim = function () { ... };
  },
  "3.18.1",
  {
    requires: ["base-base"]
  }
)
```

`YUI.add` 라는 이름의 메서드에 차례로 모듈명, 모듈의 내용, 버전, 의존성 정보를 한꺼번에 제공하고 있음을 확인할 수 있다.

## Closure Library

## Dojo

## AMD(Require.js)

## CJS

## ESM
