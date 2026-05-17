---
title: '번들러 없이 ESM만으로 애플리케이션 개발해보기'
publish: private
---

### 셋업
- [ ] 폴더 만들고 index.html, main.js, a.js, b.js 생성 (깊이 3단계 정도의 import chain)
- [ ] `python3 -m http.server 8000` 으로 서빙 (file:// 로는 ESM 안 돌아감)

### 관찰하기
- [ ] DevTools Network 탭 Waterfall에서 계단식 로딩 확인 (의존성 깊이만큼 직렬 RTT 발생)
- [ ] Throttling을 Slow 3G로 바꿔서 다시 관찰 (평소 안 보이던 문제들이 드러남)
- [ ] Coverage 탭에서 실제로 실행된 코드 비율 확인 (splitting의 필요성이 숫자로 보임)

### 의도적으로 부딪혀보기
- [ ] `import React from 'react'` 시도하고 실패하는 거 확인 (bare specifier가 왜 브라우저 표준이 아닌지)
- [ ] importmap으로 bare specifier 해결 (webpack alias가 하던 일)
- [ ] 순환 의존성 일부러 만들어서 undefined 만나기 (live binding과 평가 순서의 함정)
- [ ] `?v=2` 같은 수동 cache busting 해보기 (contenthash 자동화의 가치)

### 비동기성 체감
- [ ] main.js에 import 여러 개 두고 병렬 fetch 관찰 (동기 문법인데 시스템은 비동기)
- [ ] CSS 애니메이션 돌리면서 dynamic import 호출 (애니메이션 안 끊기는 거 확인)