---
title: Next middleware와 Cookie 옵션들
date: 2026-03-29
tags: [nextjs, cookie]
description: |
  Next.js middleware와 Cookie의 옵션들을 알아보자.
publish: public
---



ar-framework의 샌드박스 세션(데모 모드) 개발을 시작하며. 미들웨어에서 쿠키 설정에서부터 시작하게 되었고 둘에 대해 간략히 정리하며 넘어가기 위해 작성한다.



## 쿠키 옵션

### httpOnly

자바스크립트로 쿠키 접근 금지 여부. true면 접근 금지.

### secure

HTTPS 연결에서만 쿠키를 전송할지 여부. true로 설정하면 HTTP 환경에서는 쿠키가 전송되지 않는다. 앞서 언급했듯 sameSite가 none이라면 반드시 true로 설정해야 한다.

### path

쿠키가 유효한 전체 경로. "/" 로 설정하면 모든 페이지에서 사용 가능.

### sameSite

'strict', 'lax', 'none' 중 하나로 설정이 가능하다. 

번역하자면 '엄격', '느슨함', '없음' 인데, 배경지식이 없다면 'same site 옵션을 느슨하게' 가 무슨 말인지 당연히 알기 어려울 수 밖에 없다. CSRF, 사이트 간 요청 위조라는 공격에 어느 정도로 민감하게 대응할 것인지에 대한 여부를 설정하는 것인데, CSRF란 Cross Site Request Forgery 의 약자로서 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위를 특정 웹사이트에 요청하게 만드는 사기행위다. 내 쿠키를 사용해 원치 않는 일을 행하게 만드는거다. 이 일은 사용자가 해당 사기를 위해 만들어진 웹사이트에 접속했을 때 일어나는데, 이 때 쿠키의 sameSite 옵션이 strict라면 사기 웹사이트와 요청 받는 정상 웹사이트끼리 다른 사이트이기 때문에 브라우저가 쿠키를 탑재하지 않게되어 쿠키가 사기에 사용되는 것을 막을 수 있다. 

하지만 strict는 너무 단호해서 약간의 불편함을 야기하는데, 예를 들어 naver.com에서 로그인이 유지되고 있는 상태에서, kakao.com 에서 naver.com 의 링크를 클릭해서 접속하게 되었을 때는 same site에서의 요청이 아니기 때문에 쿠키를 탑재하지 않아 로그인이 유지되지 않는 문제가 있는 것이다.

이 때 lax 옵션을 사용해 '느슨한' 제한을 적용한다. lax로 설정하면 만일 Forgery 당하더라도 큰 문제가 없는 GET 요청에는 same site가 아니더라도 쿠키 사용을 허용해주고, 따라서 위와 같은 경우에서도 로그인을 유지할 수 있게 된다.

sameSite 옵션을 none으로 설정 시 언제나 쿠키 사용을 허용하게 된다. sameSite가 none이라면 secure(httpOnly)를 true로 설정해야 한다.



## Next.js middleware

Next.js의 미들웨어는 요청이 완료되기 전에 실행되는 함수로, `middleware.ts` 파일을 프로젝트 루트에 두면 된다. 특정 경로 요청에 대해 리다이렉트, 헤더 수정, 쿠키 설정 등을 처리할 수 있다.

```ts
// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.cookies.set("session", "demo-token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/demo/:path*"],
};
```

`matcher`로 미들웨어를 적용할 경로를 지정한다. 위 예시는 `/demo` 하위 경로에만 적용된다.

쿠키를 읽을 때는 `request.cookies.get("key")`로, 삭제할 때는 `response.cookies.delete("key")`로 처리한다. `secure` 옵션은 프로덕션 환경에서만 활성화하도록 환경변수로 분기하는 것이 일반적이다.
