---
title: "모듈 시리즈 2: 모듈 시스템의 설계와 구현"
publish: draft
date: 2026-05-16
---

각 라이브러리의 모듈시스템 설계와 구현을 비교한다.

그 전에, 들어가며, 먼저 '모듈시스템' 을 구성하는 요소에는 다음과 같은 것들이 존재한다.

1. 의존성 선언과 해석
2. 모듈 식별자 (Module ID)
3. 익스포트/임포트 모델
4. 실행 모델
5. 로딩 메커니즘
6. 스코프와 격리
7. 캐싱과 싱글톤성
8. 비동기 vs 동기
9. 패키지 시스템과의 관계
10. 정적 분석 가능성
11. 인터롭

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

참고로 YUI2와 YUI3는 모두 비동기적으로 모듈을 로딩한다. 메타데이터로 작성된 모듈 의존성을 펼치고, 이를 topological sort해서 의존성이 작은 순서대로 script 태그로 로딩하는 방식이다.

## Closure Library

## Dojo

- XHR로 비동기 모듈 로드를 구현했다는 특징
- AMD와 Require.js에 많은 영향을 주었다

## AMD(Require.js)

## CJS

## ESM
