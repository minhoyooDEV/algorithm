# 대용량 및 분산처리 특화 시니어 프론트엔드 개발자 알고리즘 학습 플랜

## 🎯 목표
- 대용량 데이터 처리에 특화된 프론트엔드 시니어 포지션 준비
- 분산 시스템 환경에서의 클라이언트 사이드 최적화 역량 강화
- 시스템 설계 및 성능 최적화 중심의 알고리즘 역량 개발

## 📊 현재 상황 분석

### 구현 완료 문제 현황
- **LeetCode**: Two Sum, Sort Colors (4가지 구현 방법)
- **CSES**: Weird Algorithm (기본 구현)
- **AtCoder**: ABC086A
- **프로젝트 구조**: pnpm 모노레포, TypeScript, 테스트 환경 구축 완료

### 현재 수준 평가
✅ **기본 구현력**: Hash Map, 배열 조작, 기본 알고리즘 패턴 이해  
✅ **코드 품질**: 다양한 구현 방법 비교 분석, 성능 벤치마크  
🔄 **시스템 설계**: 대용량 데이터 처리 경험 부족  
🔄 **최적화 기법**: 메모리/시간 복잡도 고급 최적화 필요  

## 🏆 12주 마스터 플랜

### Phase 1: 기초 최적화 마스터 (주차 1-3)
**목표**: 시간/공간 복잡도 완벽 이해 및 최적화 기법 습득

#### Week 1: 배열 & 해시 최적화
**핵심 개념**: Two Pointers, Sliding Window, Hash 최적화  
**실무 연결**: 대용량 배열 메모리 효율적 처리

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **[15. 3Sum](https://leetcode.com/problems/3sum/)** (Medium) - Two Pointers 기본
- [ ] **[18. 4Sum](https://leetcode.com/problems/4sum/)** (Medium) - Two Pointers 확장
- [ ] **[167. Two Sum II](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)** (Medium) - 정렬된 배열에서 Two Pointers
- [ ] **[11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)** (Medium) - Two Pointers 최적화
- [ ] **[239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)** (Hard) - Deque 활용
- [ ] **[76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)** (Hard) - Sliding Window 고급
- [ ] **[560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)** (Medium) - Prefix Sum + HashMap

**CSES 필수 문제**:
- [ ] **[Sum of Two Values](https://cses.fi/problemset/task/1640)** - Two Pointers 기초
- [ ] **[Subarray Sums I](https://cses.fi/problemset/task/1660)** - Prefix Sum
- [ ] **[Subarray Sums II](https://cses.fi/problemset/task/1661)** - HashMap + Prefix Sum

**보너스 문제** (시간 여유 시):
- [ ] **[1. Two Sum](https://leetcode.com/problems/two-sum/)** (Easy) - 복습용
- [ ] **[713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)** (Medium)

#### Week 2: 정렬 & 이진 탐색 고급
**핵심 개념**: Binary Search 변형, Merge Sort 응용  
**실무 연결**: 대용량 데이터 정렬, 검색 시스템

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **[33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)** (Medium) - 변형 이진 탐색
- [ ] **[81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)** (Medium) - 중복 처리
- [ ] **[4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)** (Hard) - 이진 탐색 + 수학
- [ ] **[315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)** (Hard) - Merge Sort 응용
- [ ] **[327. Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)** (Hard) - Merge Sort + Prefix Sum
- [ ] **[493. Reverse Pairs](https://leetcode.com/problems/reverse-pairs/)** (Hard) - Merge Sort 변형
- [ ] **[275. H-Index II](https://leetcode.com/problems/h-index-ii/)** (Medium) - 이진 탐색 응용

**CSES 필수 문제**:
- [ ] **[Factory Machines](https://cses.fi/problemset/task/1620)** - 이진 탐색 최적화
- [ ] **[Array Division](https://cses.fi/problemset/task/1085)** - 이진 탐색 + 그리디
- [ ] **[Maximum Subarray Sum](https://cses.fi/problemset/task/1643)** - Kadane's Algorithm

**보너스 문제**:
- [ ] **153. Find Minimum in Rotated Sorted Array** (Medium)
- [ ] **162. Find Peak Element** (Medium)

#### Week 3: 스택 & 큐 최적화
**핵심 개념**: Monotonic Stack/Queue, Deque 활용  
**실무 연결**: 실시간 데이터 처리, 버퍼 관리

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **84. Largest Rectangle in Histogram** (Hard) - Monotonic Stack
- [ ] **85. Maximal Rectangle** (Hard) - 2D 히스토그램
- [ ] **739. Daily Temperatures** (Medium) - Monotonic Stack 기초
- [ ] **503. Next Greater Element II** (Medium) - Circular Array
- [ ] **907. Sum of Subarray Minimums** (Medium) - Monotonic Stack 응용
- [ ] **1019. Next Greater Node In Linked List** (Medium)
- [ ] **42. Trapping Rain Water** (Hard) - Stack or Two Pointers

**CSES 필수 문제**:
- [ ] **Nearest Smaller Elements** - Monotonic Stack 기초
- [ ] **Sliding Window Cost** - Sliding Window + Data Structure

**보너스 문제**:
- [ ] **496. Next Greater Element I** (Easy) - 기초 연습
- [ ] **901. Online Stock Span** (Medium)

### Phase 2: 고급 자료구조 (주차 4-6)
**목표**: 복잡한 데이터 구조를 통한 효율적 문제 해결

#### Week 4: 트리 & 그래프 기초
**핵심 개념**: DFS/BFS, Tree DP, Topological Sort  
**실무 연결**: 컴포넌트 트리, 의존성 관리

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **230. Kth Smallest Element in a BST** (Medium) - Tree 순회
- [ ] **297. Serialize and Deserialize Binary Tree** (Hard) - Tree 직렬화
- [ ] **207. Course Schedule** (Medium) - Topological Sort
- [ ] **210. Course Schedule II** (Medium) - Topological Sort 응용
- [ ] **124. Binary Tree Maximum Path Sum** (Hard) - Tree DP
- [ ] **543. Diameter of Binary Tree** (Easy) - Tree DP 기초
- [ ] **437. Path Sum III** (Medium) - Tree DFS

**CSES 필수 문제**:
- [ ] **Tree Diameter** - Tree DP
- [ ] **Tree Distances I** - Tree DP 응용
- [ ] **Tree Distances II** - Re-rooting 기법
- [ ] **Company Queries I** - Binary Lifting

**보너스 문제**:
- [ ] **98. Validate Binary Search Tree** (Medium)
- [ ] **112. Path Sum** (Easy) - 기초 연습

#### Week 5: 고급 트리 구조
**핵심 개념**: Segment Tree, Fenwick Tree, Lazy Propagation  
**실무 연결**: 대량 데이터 구간 쿼리, 실시간 업데이트

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **307. Range Sum Query - Mutable** (Medium) - Segment Tree/Fenwick Tree
- [ ] **315. Count of Smaller Numbers After Self** (Hard) - Fenwick Tree
- [ ] **327. Count of Range Sum** (Hard) - Coordinate Compression
- [ ] **493. Reverse Pairs** (Hard) - Fenwick Tree 응용
- [ ] **406. Queue Reconstruction by Height** (Medium) - Fenwick Tree
- [ ] **218. The Skyline Problem** (Hard) - Sweep Line + Data Structure

**CSES 필수 문제**:
- [ ] **Range Sum Queries I** - Prefix Sum 기초
- [ ] **Range Sum Queries II** - Fenwick Tree
- [ ] **Range Minimum Queries I** - Sparse Table
- [ ] **Range Minimum Queries II** - Segment Tree
- [ ] **Range Update Queries** - Lazy Propagation

**구현 연습**:
- [ ] **Segment Tree 구현** - 기본 구간 합/최솟값
- [ ] **Fenwick Tree 구현** - 효율적인 구간 합

#### Week 6: 그래프 최적화
**핵심 개념**: 최단경로, MST, Union-Find 최적화  
**실무 연결**: 네트워크 라우팅, 분산 시스템 통신

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **743. Network Delay Time** (Medium) - Dijkstra
- [ ] **787. Cheapest Flights Within K Stops** (Medium) - Bellman-Ford
- [ ] **1334. Find the City** (Medium) - Floyd-Warshall
- [ ] **1584. Min Cost to Connect All Points** (Medium) - MST (Prim/Kruskal)
- [ ] **684. Redundant Connection** (Medium) - Union-Find
- [ ] **685. Redundant Connection II** (Hard) - Union-Find 응용
- [ ] **399. Evaluate Division** (Medium) - Weighted Union-Find

**CSES 필수 문제**:
- [ ] **Shortest Routes I** - Dijkstra
- [ ] **Shortest Routes II** - Floyd-Warshall
- [ ] **High Score** - Bellman-Ford (negative cycles)
- [ ] **Road Reparation** - MST
- [ ] **Road Construction** - Union-Find

**보너스 문제**:
- [ ] **200. Number of Islands** (Medium) - Union-Find/DFS
- [ ] **547. Number of Provinces** (Medium)

### Phase 3: 동적 계획법 마스터 (주차 7-9)
**목표**: 최적화 문제 해결 및 메모이제이션 고급 기법

#### Week 7: 1D/2D DP 최적화
**핵심 개념**: 구간 DP, 최적화 기법, 공간 복잡도 감소  
**실무 연결**: 캐싱 전략, 최적 자원 할당

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **312. Burst Balloons** (Hard) - 구간 DP
- [ ] **1547. Minimum Cost to Cut a Stick** (Hard) - 구간 DP 응용
- [ ] **1000. Minimum Cost to Merge Stones** (Hard) - 3D DP
- [ ] **516. Longest Palindromic Subsequence** (Medium) - 구간 DP
- [ ] **1039. Minimum Score Triangulation** (Medium) - 구간 DP
- [ ] **87. Scramble String** (Hard) - 3D DP
- [ ] **115. Distinct Subsequences** (Hard) - 2D DP

**CSES 필수 문제**:
- [ ] **Coin Combinations I** - 기본 DP
- [ ] **Coin Combinations II** - 순서 고려 DP
- [ ] **Removing Digits** - Digit DP
- [ ] **Edit Distance** - 2D DP 클래식
- [ ] **Rectangle Cutting** - 2D DP 최적화

**최적화 기법**:
- [ ] **공간 복잡도 최적화** - 1D 배열로 2D DP 구현
- [ ] **메모이제이션** - Top-down vs Bottom-up 비교

#### Week 8: 고급 DP 패턴
**핵심 개념**: 문자열 DP, 상태 압축, Bitmask DP  
**실무 연결**: 텍스트 처리, 상태 관리 최적화

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **72. Edit Distance** (Hard) - 2D DP 클래식
- [ ] **1143. Longest Common Subsequence** (Medium) - LCS
- [ ] **1092. Shortest Common Superstring** (Hard) - TSP + DP
- [ ] **691. Stickers to Spell Word** (Hard) - Bitmask DP
- [ ] **943. Find the Shortest Superstring** (Hard) - TSP DP
- [ ] **526. Beautiful Arrangement** (Medium) - Bitmask DP
- [ ] **1125. Smallest Sufficient Team** (Hard) - Bitmask DP

**CSES 필수 문제**:
- [ ] **Hamiltonian Flights** - Bitmask DP (TSP)
- [ ] **Elevator Rides** - Bitmask DP 최적화
- [ ] **Counting Tilings** - 상태 압축 DP
- [ ] **String Matching** - KMP + DP

**Bitmask DP 패턴**:
- [ ] **비트마스크 기본 연산** 학습
- [ ] **상태 전이 최적화** 기법

#### Week 9: DP 최적화 기법
**핵심 개념**: CHT, Divide & Conquer Optimization, 단조성  
**실무 연결**: 스케줄링, 리소스 최적화

**고급 최적화 기법**:
- [ ] **Convex Hull Trick (CHT)** - O(n²) → O(n log n)
- [ ] **Divide & Conquer Optimization** - 사분할정복 최적화
- [ ] **Knuth-Yao Speedup** - 단조성 이용
- [ ] **Monotonic Queue Optimization** - 슬라이딩 윈도우

**LeetCode 필수 문제** (Hard):
- [ ] **1235. Maximum Profit in Job Scheduling** (Hard) - DP + 이진 탐색
- [ ] **1751. Maximum Number of Events II** (Hard) - 3D DP 최적화
- [ ] **410. Split Array Largest Sum** (Hard) - DP + 이진 탐색
- [ ] **1420. Build Array Where You Can Find Maximum** (Hard)

**CSES 고급 문제**:
- [ ] **Optimal Array** - CHT 적용
- [ ] **Money Sums** - 큰 수 처리
- [ ] **Two Sets II** - 수학적 최적화

### Phase 4: 시스템 설계 & 실전 (주차 10-12)
**목표**: 대용량 시스템에서의 알고리즘 적용

#### Week 10: 문자열 고급 알고리즘
**핵심 개념**: 패턴 매칭, 문자열 해싱, Trie 최적화  
**실무 연결**: 검색 엔진, 자동완성, 텍스트 분석

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **28. Find the Index of First Occurrence** (Easy) - KMP 구현
- [ ] **214. Shortest Palindrome** (Hard) - KMP + 팰린드롬
- [ ] **1392. Longest Happy Prefix** (Hard) - KMP 응용
- [ ] **208. Implement Trie** (Medium) - Trie 기본
- [ ] **212. Word Search II** (Hard) - Trie + DFS
- [ ] **336. Palindrome Pairs** (Hard) - Trie + 팰린드롬
- [ ] **187. Repeated DNA Sequences** (Medium) - Rolling Hash

**CSES 필수 문제**:
- [ ] **String Hashing** - Rolling Hash
- [ ] **Pattern Positions** - KMP/Z-algorithm
- [ ] **Border** - KMP failure function
- [ ] **Palindrome Queries** - 팰린드롬 + 해싱

**고급 알고리즘 구현**:
- [ ] **KMP Algorithm** - 패턴 매칭
- [ ] **Z-Algorithm** - 문자열 분석
- [ ] **Rolling Hash** - 효율적 문자열 비교
- [ ] **Suffix Array** - 고급 문자열 구조

#### Week 11: 수학 & 기하 알고리즘
**핵심 개념**: 모듈러 연산, 확장 유클리드, Convex Hull  
**실무 연결**: 암호화, 그래픽스, 통계 처리

**LeetCode 필수 문제** (Medium/Hard):
- [ ] **50. Pow(x, n)** (Medium) - Fast Exponentiation
- [ ] **149. Max Points on a Line** (Hard) - 기하학
- [ ] **587. Erect the Fence** (Hard) - Convex Hull
- [ ] **1363. Largest Multiple of Three** (Hard) - 수론
- [ ] **1015. Smallest Integer Divisible by K** (Medium) - 모듈러 연산
- [ ] **365. Water and Jug Problem** (Medium) - 확장 유클리드
- [ ] **319. Bulb Switcher** (Medium) - 수학적 통찰

**CSES 필수 문제**:
- [ ] **Exponentiation** - Fast Power
- [ ] **Exponentiation II** - Modular Exponentiation
- [ ] **Counting Divisors** - 수론 기초
- [ ] **Common Divisors** - GCD
- [ ] **Sum of Divisors** - 수학적 공식

**수학 알고리즘**:
- [ ] **Sieve of Eratosthenes** - 소수 찾기
- [ ] **Extended Euclidean** - 확장 유클리드
- [ ] **Chinese Remainder Theorem** - 중국인의 나머지 정리

#### Week 12: 시스템 설계 통합
**핵심 개념**: 분산 알고리즘, 로드 밸런싱, 캐싱 전략  
**실무 연결**: 마이크로프론트엔드, CDN, 실시간 업데이트

**시스템 설계 관련 알고리즘**:
- [ ] **Consistent Hashing** 구현
- [ ] **Rate Limiting** 알고리즘 (Token Bucket, Sliding Window)
- [ ] **Load Balancing** 알고리즘 (Round Robin, Weighted)
- [ ] **Cache Replacement** 정책 (LRU, LFU)
- [ ] **Bloom Filter** 구현
- [ ] **HyperLogLog** 카운팅 알고리즘

**LeetCode 시스템 설계 문제**:
- [ ] **146. LRU Cache** (Medium) - 캐시 구현
- [ ] **460. LFU Cache** (Hard) - 고급 캐시
- [ ] **355. Design Twitter** (Medium) - 소셜 미디어 설계
- [ ] **380. Insert Delete GetRandom O(1)** (Medium)
- [ ] **381. Insert Delete GetRandom O(1) - Duplicates** (Hard)
- [ ] **432. All O`one Data Structure** (Hard)

**실전 프로젝트**:
- [ ] **대용량 데이터 처리 시뮬레이션** 구현
- [ ] **분산 시스템 알고리즘** 데모
- [ ] **성능 벤치마크** 테스트 스위트

## 🚀 시니어 레벨 필수 토픽

### 1. 성능 최적화 (🔥 최우선)
```
- 시간/공간 복잡도 Trade-off 분석
- 메모리 지역성 고려한 알고리즘 설계
- 캐시 효율적 자료구조 활용
- 병렬화 가능한 알고리즘 패턴
```

### 2. 대용량 데이터 처리 (🔥 최우선)
```
- External Sorting (메모리 제한 환경)
- Streaming Algorithms (온라인 알고리즘)
- Approximate Algorithms (근사 해법)
- Data Structure for Big Data (Bloom Filter, Count-Min Sketch)
```

### 3. 분산 시스템 알고리즘 (🔥 핵심)
```
- Consistent Hashing
- Distributed Consensus (Raft, PBFT 개념)
- Load Balancing Algorithms
- Rate Limiting Algorithms
```

### 4. 실시간 처리 (🔥 핵심)
```
- Event-driven Programming Patterns
- Producer-Consumer 최적화
- Backpressure 처리
- Circuit Breaker 패턴
```

### 5. 프론트엔드 특화 (⭐ 차별화)
```
- Virtual DOM 최적화 알고리즘
- Reconciliation 알고리즘 이해
- 렌더링 최적화 (Batching, Scheduling)
- 메모리 누수 방지 패턴
```

## 📈 주간 학습 루틴

### 평일 (월-금): 2-3시간
- **Morning (1시간)**: 이론 학습 + 핵심 문제 1개
- **Evening (1-2시간)**: 구현 + 최적화 + 테스트 작성

### 주말: 4-5시간
- **토요일**: 주간 복습 + 어려운 문제 도전
- **일요일**: 실전 프로젝트 + 성능 분석

### 월간 평가
- **Week 3**: 중간 평가 + 약점 보완
- **Week 4**: 실전 모의 면접 + 피드백

## 🎯 면접 대비 전략

### 1. 코딩 테스트 (30%)
- **목표**: Hard 문제 20분 내 해결
- **연습**: 매일 1-2문제, 시간 제한 연습
- **패턴**: 각 카테고리별 핵심 패턴 10개씩

### 2. 시스템 설계 (40%)
- **목표**: 대용량 프론트엔드 아키텍처 설계
- **연습**: 주 1회 mock design interview
- **준비**: 실제 서비스 아키텍처 분석

### 3. 최적화 경험 (30%)
- **목표**: 구체적인 성능 개선 사례 준비
- **준비**: 프로젝트별 Before/After 성능 지표
- **스토리텔링**: 문제 → 분석 → 해결 → 결과

## 🔧 도구 및 환경 설정

### 개발 환경 최적화
- **VS Code**: 알고리즘 전용 설정
- **측정 도구**: performance.now(), memory profiler
- **시각화**: 알고리즘 복잡도 그래프

### 학습 관리
- **진도 추적**: GitHub Issues/Projects
- **성능 기록**: 각 문제별 실행시간/메모리 기록
- **복습 시스템**: Spaced Repetition

## 📚 추천 리소스

### 필수 교재
1. "Algorithms" by Robert Sedgewick
2. "Designing Data-Intensive Applications" by Martin Kleppmann
3. "High Performance JavaScript" by Nicholas C. Zakas

### 온라인 리소스
- **LeetCode Premium**: 시스템 설계 + 기업별 문제
- **Educative.io**: 시스템 설계 인터뷰 코스
- **YouTube**: Techdummies, Back to Back SWE

### 실전 연습
- **Pramp**: Mock interview 플랫폼
- **InterviewBit**: 체계적인 학습 경로
- **CodeSignal**: 기업 맞춤 연습

---

## ⚡ 성공을 위한 핵심 포인트

1. **실무 연결**: 모든 알고리즘을 프론트엔드 실무와 연관지어 학습
2. **성능 중심**: 단순 구현보다 최적화에 집중
3. **스토리텔링**: 각 솔루션의 trade-off를 명확히 설명
4. **지속성**: 꾸준한 Daily Practice가 핵심
5. **실전 감각**: 시간 제한 하에서의 문제 해결 능력