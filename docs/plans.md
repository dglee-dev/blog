# 설계 문서 인덱스

## Route Prefetch

prefetch 캐시 구조 설계 및 구현 계획. `Prefetch` HOC, `PrefetchCacheContext`, `usePrefetchCache`를 포함한 prefetch 아키텍처 전반을 다룬다.

- [design.md](../src/shared/lib/router/docs/prefetch-cache/design.md) — 설계 목적, 레이어별 선택지와 트레이드오프, 최종 구현 방향
- [milestone.md](../src/shared/lib/router/docs/prefetch-cache/milestone.md) — 단계별 구현 계획 및 체크리스트

---

## PostList Skeleton

포스트 리스트 진입 시 실제 셰이프와 동일한 스켈레톤을 보여주기 위한 설계. Vercel KV 기반 서버 캐시 구조를 채택한다.

- [design.md](../src/pages/posts/docs/skeleton/design.md) — 타이밍 고민, 스택 선택 이유, 구현 방향
- [milestone.md](../src/pages/posts/docs/skeleton/milestone.md) — 단계별 구현 계획 및 체크리스트
