/**
 * LeetCode 75. Sort Colors - Best Practice 구현
 *
 * 문제: 0, 1, 2로 이루어진 배열을 제자리에서 정렬하기
 * 제약: 라이브러리 정렬 함수 사용 금지, 제자리 정렬
 */

/**
 * 방법 1: 계수 정렬 (Counting Sort) - 현재 구현
 * 시간복잡도: O(n), 공간복잡도: O(1) - 고정 크기 배열 사용
 * 장점: 간단하고 직관적, 안정적인 성능
 * 단점: 두 번의 배열 순회 필요
 */
export function sortColorsCountingSort(nums: number[]): void {
  // 각 색상(0, 1, 2)의 개수를 세기 위한 배열
  const counts: [number, number, number] = [0, 0, 0];

  // 첫 번째 순회: 각 색상의 개수 계산
  for (const num of nums) {
    counts[num]++;
  }

  // 두 번째 순회: 계산된 개수를 바탕으로 배열 재구성
  let index = 0;
  for (let color = 0; color < 3; color++) {
    for (let count = 0; count < counts[color]; count++) {
      nums[index++] = color;
    }
  }
}

/**
 * 방법 2: 네덜란드 국기 알고리즘 (Dutch National Flag) - 최적화된 원패스 솔루션
 * 시간복잡도: O(n), 공간복잡도: O(1)
 * 장점: 한 번의 순회로 해결, 메모리 효율적
 * 단점: 로직이 상대적으로 복잡
 */
export function sortColorsDutchFlag(nums: number[]): void {
  let left = 0;   // 0의 경계 (0들의 끝 위치)
  let right = nums.length - 1; // 2의 경계 (2들의 시작 위치)
  let current = 0; // 현재 검사 중인 위치

  while (current <= right) {
    if (nums[current] === 0) {
      // 0을 발견하면 left 위치와 교환하고 left, current 모두 증가
      [nums[left], nums[current]] = [nums[current], nums[left]];
      left++;
      current++;
    } else if (nums[current] === 2) {
      // 2를 발견하면 right 위치와 교환하고 right만 감소
      // current는 증가시키지 않음 (교환된 값을 다시 확인해야 함)
      [nums[current], nums[right]] = [nums[right], nums[current]];
      right--;
    } else {
      // 1인 경우 그대로 두고 current만 증가
      current++;
    }
  }
}

/**
 * 방법 3: 함수형 프로그래밍 스타일 (참고용)
 * 시간복잡도: O(n log n), 공간복잡도: O(1)
 * 장점: 코드가 매우 간결, 가독성 좋음
 * 단점: 정렬 알고리즘에 의존하므로 최적화되지 않음
 */
export function sortColorsFunctional(nums: number[]): void {
  nums.sort((a, b) => a - b);
}

/**
 * 방법 4: 퀵소트 기반 파티션 (교육 목적)
 * 시간복잡도: O(n), 공간복잡도: O(1)
 * 장점: 파티션 개념 학습에 도움
 * 단점: 두 번의 파티션 과정 필요
 */
export function sortColorsPartition(nums: number[]): void {
  // 첫 번째 파티션: 0과 비-0 분리
  let boundary = partitionByValue(nums, 0, 0, nums.length - 1);

  // 두 번째 파티션: 1과 2 분리 (비-0 부분에서)
  partitionByValue(nums, 1, boundary, nums.length - 1);
}

/**
 * 특정 값을 기준으로 배열을 파티션하는 헬퍼 함수
 * @param nums 대상 배열
 * @param target 파티션할 값
 * @param start 시작 인덱스
 * @param end 종료 인덱스
 * @returns 파티션 후 target 값들의 끝 인덱스 + 1
 */
function partitionByValue(nums: number[], target: number, start: number, end: number): number {
  let left = start;

  for (let i = start; i <= end; i++) {
    if (nums[i] === target) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }

  return left;
}

/**
 * 성능 비교를 위한 벤치마크 함수
 */
export function benchmarkSortColors(): void {
  const testCases = [
    [2, 0, 2, 1, 1, 0],
    [2, 0, 1],
    [0],
    [1, 2, 0, 1, 2, 0, 1, 2],
    Array.from({length: 1000}, () => Math.floor(Math.random() * 3))
  ];

  const methods = [
    { name: 'Counting Sort', fn: sortColorsCountingSort },
    { name: 'Dutch Flag', fn: sortColorsDutchFlag },
    { name: 'Functional', fn: sortColorsFunctional },
    { name: 'Partition', fn: sortColorsPartition }
  ];

  console.log('=== Sort Colors 성능 비교 ===\n');

  testCases.forEach((testCase, index) => {
    console.log(`테스트 케이스 ${index + 1}: [${testCase.length <= 10 ? testCase.join(', ') : `길이 ${testCase.length}`}]`);

    methods.forEach(({ name, fn }) => {
      const nums = [...testCase];
      const start = performance.now();
      fn(nums);
      const end = performance.now();

      console.log(`  ${name}: ${(end - start).toFixed(3)}ms`);
    });

    console.log();
  });
}

/**
 * 알고리즘 선택 가이드
 *
 * 1. 일반적인 경우: sortColorsDutchFlag (네덜란드 국기 알고리즘)
 *    - 한 번의 순회로 해결
 *    - 공간복잡도 O(1)
 *    - 업계 표준으로 인정받는 최적해
 *
 * 2. 이해하기 쉬운 구현: sortColorsCountingSort
 *    - 직관적이고 구현하기 쉬움
 *    - 면접에서 설명하기 좋음
 *
 * 3. 코드 간결성 우선: sortColorsFunctional
 *    - 매우 간단하지만 최적화되지 않음
 *    - 프로토타입이나 간단한 용도
 *
 * 4. 학습 목적: sortColorsPartition
 *    - 파티션 개념 이해에 도움
 *    - 퀵소트 이해의 기초
 */

// 기본 export는 가장 최적화된 솔루션
export default sortColorsDutchFlag;
