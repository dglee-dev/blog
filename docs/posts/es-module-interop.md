---
title: 'esModuleInterop 알아보기'
date: 2026-05-06
publish: draft
tags: typescript

---

## 상황

hummer-cli 프로젝트 개발 중, tsc를 통해 빌드된 결과물을 executable file로 제공하기 위해 tsc를 실행해 보았다. 결과는 처참한 에러의 향연.

다음과 같은 에러들이 발생했다.

> TS1259: Module 'path' can only be default-imported using the 'esModuleInterop' flag
> 	
> 	@types/node/path.d.ts:177:5
> 	export = path;  
> 	This module is declared with 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.

> TS1192: Module 'fs/promises' has no default export

> TS1192: Module 'os' has no default export

> TS2802: Type 'string' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher.

자세히 들여다보지 않아도 'esModuleInterop' 이라는 단어가 굉장히 빈출되고 있음을 확인할 수 있다. 클로드에게 에러를 보여주니 무엇을 해야하는지 말해줬다.



## esModuleInterop?

