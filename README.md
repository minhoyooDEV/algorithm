# Algorithm (pnpm + TypeScript)

각 문제 사이트(LeetCode/AtCoder/CSES)를 pnpm 워크스페이스로 구성한 모노레포입니다.

## 준비

1) pnpm 설치 후 루트에서 설치

```bash
pnpm i
```

## 공통 스크립트

```bash
pnpm build   # 모든 패키지 빌드
pnpm test    # 모든 패키지 테스트
pnpm lint    # 모든 패키지 ESLint
pnpm format  # 모든 패키지 Prettier
```

## 패키지별 예시 실행

```bash
# LeetCode 샘플(두 수의 합)
pnpm --filter @algo/leetcode dev

# AtCoder 샘플(ABC086A)
pnpm --filter @algo/atcoder dev

# CSES 샘플(Weird Algorithm)
pnpm --filter @algo/cses dev
```

## 구조

```
packages/
  utils/         # 공용 유틸(UnionFind, 파서 등)
  leetcode/      # LeetCode 문제 풀이/테스트
  atcoder/       # AtCoder 문제 풀이/테스트
  cses/          # CSES 문제 풀이/테스트
```

