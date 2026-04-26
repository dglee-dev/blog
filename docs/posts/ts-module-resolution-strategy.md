---
title: 타입스크립트 module resolution strategy
date: 2026-04-21
publish: private
---

Cannot find name `<something>` 에러를 수없이 마주한다.

1. 타입스크립트는 어떤 상황에서 이 에러를 내뱉는가?
2. 타입스크립트는 어떻게 '찾을 수 없다' 고 결정하는가?

2번을 TS의 Module Resolution Strategy 라는 이름으로 말할 수 있다. 컴파일러가 import나 export 문을 만났을 때, 해당 모듈 파일이 디스크 상의 정확히 어디에 있는지 찾아내는 알고리즘을 의미한다. 단순히 파일 이름만 보고 찾는 게 아니라, 설정된 규칙에 따라 여러 경로를 뒤져보며 "아, 이 코드는 이 파일에 있구나!"라고 연결해주는 탐색 로직이다.

tsconfig의 `moduleResolution` 프로퍼티의 값을 통해 어떤 module resolution strategy를 사용할지 선택이 가능하다.

그런데 사용자가 module resolution strategy를 직접 조정해야 하는 경우는 어떤 경우일까?
