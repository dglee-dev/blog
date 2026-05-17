---
title: "npm으로 설치된 CLI 툴은 어떻게 작동될까?"
description: "`myapp` 을 설치하고 cli 인터페이스에서 myapp을 입력하면 다운로드 받은 패키지의 파일이 실행되며 cli 툴을 사용할 수 있다. 그 안에서 어떤 일들이 일어나는걸까. bin 프로퍼티와 PATH의 역할은 무엇일까?"
publish: public
tags: hummer-cli
date: 2026-05-06
---



## 배경

클로드코드의 프롬프트 과정과 컨텍스트 유지에 사용되는 토큰을 분석해주는 cli 툴 `hummer-cli` 를 개발중이다.

`npx hummer-cli` 가 가능한지 테스트해봤는데, 작동하지 않아서 클로드에게 물어보니 package.json의 `bin` 프로퍼티를 작성해야 한다고 해서 '내가 직접 작성할게' 라고 하고는 [npm docs](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#bin)를 찾아보았다.



## 자료

bin 섹션의 첫 문장을 읽어보았다.

> A lot of packages have one or more executable files that they'd like to install into the PATH. npm makes this pretty easy.

패키지들이 한 개, 혹은 여러개의 'executable file' 을 가지고 있고 그것들을 PATH에 설치하기를 원한다는 말이다. 그리고 npm으로는 그걸 쉽게 할 수 있다는 말인 것 같다.

여기에서 '뭔소리지' 싶은 부분은 두 개다. 'executable file' 이 무엇이냐? 그리고 그걸 'PATH에 설치한다'는 것은 무슨 의미냐? 이다.

일단 내용을 좀 더 살펴보면 예제와 설명이 나온다.

```json
{
  "bin": {
    "myapp": "bin/cli.js"
  }
}
```

> So, when you install `myapp`, in case of unix-like OS it'll create a symlink from the `cli.js` script to `/usr/local/bin/myapp`

여기에서 말하는 unix-like OS는 MacOS를 의미한다. `cli.js` 로부터 `/usr/~` 로 심링크를 만든다고 하는데, 배경지식이 없다면 이것이 무슨 말인지를 이해하는 것이 쉽지 않다. 



## 해설

여기까지 살펴본 문장들을 claude에게 질문하며 이해한 바는 다음과 같다.

먼저 npx가 아니라 `npm install -g myapp` 으로 라이브러리를 전역에 설치해 cli에서 `myapp` 키워드를 이용하는 상황을 가정해 이야기 해보자.

`npm install -g myapp` 으로 패키지를 설치하면 패키지는 `/usr/local/lib/node_modules/myapp/` 에 복사된다. 그리고 이 때, package.json의 bin 프로퍼티를 탐색해서 프로퍼티 이름으로 된 심링크 파일을 생성한다. 심링크 파일이 생성되는 경로는 npm으로 설치했는지, nvm인지 brew인지에 따라 다르지만 기본적으로 npm으로 설치했을 때에는 `/usr/local/bin/myapp` 경로에 생성된다.

설치 이후 사용자가 cli 인터페이스에서 `myapp` 키워드를 호출하면 PATH에 등록되어 있는 경로들에서 myapp 파일을 찾아나선다. 생성된 심링크가 존재하는 경로는 Node.js가 설치될 때 이미 PATH에 등록되어있으므로 `/usr/local/bin`에서 myapp 심링크를 찾아 목적하는 'executable file' 인 `cli.js` 를 실행할 수 있게 된다.

정리하자면, 위에서 이해하기 어려웠던 'executable file을 PATH에 설치한다' 는 말에는 '로컬에 라이브러리를 설치하고, bin에 명시된 파일(executable file)을 가리키는 심볼릭 링크를 생성해 PATH에 등록된 경로에 둔다' 는 동작들이 숨어있다는 것을 알 수 있다. 



### Shebang

빼먹은 부분이 있는데, 본문에 다음과 같은 이야기가 나온다.

> Please make sure that your file(s) referenced in `bin` starts with `#!/usr/bin/env node`; otherwise, the scripts are started without the node excutable

여기에 등장하는 `#!` 으로 시작하는 이 라인은 일명 shebang(sharp + bang) 이라 불리우는 것이다. 첫 줄에 어떤 인터프리터(런타임)으로 해당 file을 해석해야 하는지에 대한 힌트를 제공하는 것이다. 만약 shebang line을 명시하지 않으면 OS는 해당 파일을 쉘 스크립트로 인식해 오류를 내뱉게 된다고 한다.



- [Wikipedia - Shebang (Unix)](https://en.wikipedia.org/wiki/Shebang_(Unix))
- [Rㅌeddit - Today I Understood The Importance of the Shebang](https://www.reddit.com/r/bash/comments/ugoz97/today_i_understood_the_importance_of_the_shebang/)



## 적용

실제 프로젝트에 어떻게 적용했는지 기록한다.