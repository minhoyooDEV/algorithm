import { describe, test, expect, beforeEach } from 'vitest';
import {
  sortColorsCountingSort,
  sortColorsDutchFlag,
  sortColorsFunctional,
  sortColorsPartition,
  benchmarkSortColors
} from './sort-colors-best-practice';

describe('Sort Colors Best Practice 종합 테스트', () => {
  // 모든 알고리즘을 테스트하기 위한 배열
  const algorithms = [
    { name: 'Counting Sort', fn: sortColorsCountingSort },
    { name: 'Dutch Flag Algorithm', fn: sortColorsDutchFlag },
    { name: 'Functional Style', fn: sortColorsFunctional },
    { name: 'Partition Based', fn: sortColorsPartition }
  ];

  // 공통 테스트 케이스들
  const testCases = [
    {
      name: 'LeetCode 예시 1',
      input: [2, 0, 2, 1, 1, 0],
      expected: [0, 0, 1, 1, 2, 2]
    },
    {
      name: 'LeetCode 예시 2',
      input: [2, 0, 1],
      expected: [0, 1, 2]
    },
    {
      name: '이미 정렬된 배열',
      input: [0, 1, 2],
      expected: [0, 1, 2]
    },
    {
      name: '역순 정렬',
      input: [2, 1, 0],
      expected: [0, 1, 2]
    },
    {
      name: '모든 0',
      input: [0, 0, 0, 0],
      expected: [0, 0, 0, 0]
    },
    {
      name: '모든 1',
      input: [1, 1, 1],
      expected: [1, 1, 1]
    },
    {
      name: '모든 2',
      input: [2, 2, 2, 2, 2],
      expected: [2, 2, 2, 2, 2]
    },
    {
      name: '단일 원소 - 0',
      input: [0],
      expected: [0]
    },
    {
      name: '단일 원소 - 1',
      input: [1],
      expected: [1]
    },
    {
      name: '단일 원소 - 2',
      input: [2],
      expected: [2]
    },
    {
      name: '빈 배열',
      input: [],
      expected: []
    },
    {
      name: '두 원소 - 정렬됨',
      input: [0, 1],
      expected: [0, 1]
    },
    {
      name: '두 원소 - 역순',
      input: [2, 0],
      expected: [0, 2]
    },
    {
      name: '큰 배열 - 무작위',
      input: [2, 0, 1, 2, 1, 0, 2, 1, 0, 1, 2, 0, 1, 0, 2],
      expected: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
    },
    {
      name: '패턴 반복',
      input: [0, 1, 2, 0, 1, 2, 0, 1, 2],
      expected: [0, 0, 0, 1, 1, 1, 2, 2, 2]
    }
  ];

  // 각 알고리즘에 대해 모든 테스트 케이스 실행
  algorithms.forEach(({ name, fn }) => {
    describe(`${name} 알고리즘`, () => {
      testCases.forEach(({ name: testName, input, expected }) => {
        test(`${testName}: [${input.length <= 10 ? input.join(',') : `길이 ${input.length}`}]`, () => {
          const nums = [...input]; // 원본 배열 보호를 위한 복사
          fn(nums);
          expect(nums).toEqual(expected);

          // 추가 검증: 정렬된 배열이 올바른지 확인
          expect(isSorted(nums)).toBe(true);
          expect(hasSameElements(input, nums)).toBe(true);
        });
      });

      // 성능 특화 테스트
      describe('성능 및 특수 케이스', () => {
        test('큰 배열 성능 테스트 (1000개 원소)', () => {
          const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 3));
          const originalLength = largeArray.length;
          const originalElements = [...largeArray];

          const start = performance.now();
          fn(largeArray);
          const end = performance.now();

          expect(largeArray).toHaveLength(originalLength);
          expect(isSorted(largeArray)).toBe(true);
          expect(hasSameElements(originalElements, largeArray)).toBe(true);

          // 성능 로깅 (실제 테스트 실패로 이어지지 않음)
          const executionTime = end - start;
          console.log(`${name} - 1000개 원소 처리 시간: ${executionTime.toFixed(3)}ms`);
        });

        test('매우 큰 배열 성능 테스트 (10000개 원소)', () => {
          const veryLargeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 3));
          const originalLength = veryLargeArray.length;
          const originalElements = [...veryLargeArray];

          const start = performance.now();
          fn(veryLargeArray);
          const end = performance.now();

          expect(veryLargeArray).toHaveLength(originalLength);
          expect(isSorted(veryLargeArray)).toBe(true);
          expect(hasSameElements(originalElements, veryLargeArray)).toBe(true);

          const executionTime = end - start;
          console.log(`${name} - 10000개 원소 처리 시간: ${executionTime.toFixed(3)}ms`);
        });

        test('최악의 경우 - 모든 2가 앞에 있는 경우', () => {
          const worstCase = [2, 2, 2, 2, 2, 1, 1, 1, 0, 0];
          const expected = [0, 0, 1, 1, 1, 2, 2, 2, 2, 2];

          fn(worstCase);
          expect(worstCase).toEqual(expected);
        });
      });
    });
  });

  // 알고리즘 간 결과 일관성 테스트
  describe('알고리즘 간 결과 일관성 검증', () => {
    testCases.forEach(({ name: testName, input }) => {
      test(`모든 알고리즘이 동일한 결과 반환: ${testName}`, () => {
        const results = algorithms.map(({ fn }) => {
          const nums = [...input];
          fn(nums);
          return nums;
        });

        // 모든 결과가 동일한지 확인
        for (let i = 1; i < results.length; i++) {
          expect(results[i]).toEqual(results[0]);
        }
      });
    });
  });

  // 벤치마크 함수 테스트
  describe('벤치마크 함수', () => {
    test('벤치마크 함수가 오류 없이 실행됨', () => {
      // 콘솔 출력을 임시로 억제
      const originalLog = console.log;
      console.log = () => {};

      expect(() => benchmarkSortColors()).not.toThrow();

      // 콘솔 복원
      console.log = originalLog;
    });
  });

  // Edge cases 특별 테스트
  describe('경계 조건 및 특수 케이스', () => {
    test('메모리 효율성 - 원본 배열 수정 확인', () => {
      const original = [2, 0, 1];
      const reference = original; // 같은 참조

      algorithms.forEach(({ name, fn }) => {
        const testArray = [2, 0, 1];
        const sameReference = testArray;

        fn(testArray);

        // 원본 배열이 수정되었는지 확인
        expect(testArray).toBe(sameReference);
        expect(testArray).toEqual([0, 1, 2]);
      });
    });

    test('타입 안정성 - 숫자 타입 유지', () => {
      const input = [2, 0, 1];

      algorithms.forEach(({ fn }) => {
        const nums = [...input];
        fn(nums);

        nums.forEach(num => {
          expect(typeof num).toBe('number');
          expect(Number.isInteger(num)).toBe(true);
          expect([0, 1, 2]).toContain(num);
        });
      });
    });
  });
});

// 헬퍼 함수들
function isSorted(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function hasSameElements(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  const count1 = [0, 0, 0];
  const count2 = [0, 0, 0];

  for (const num of arr1) count1[num]++;
  for (const num of arr2) count2[num]++;

  return count1[0] === count2[0] && count1[1] === count2[1] && count1[2] === count2[2];
}
