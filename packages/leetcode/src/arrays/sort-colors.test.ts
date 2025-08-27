import { describe, test, expect } from 'vitest';

/**
 * 배열을 제자리에서 수정하므로 반환값이 없음
 */
function sortColors(nums: number[]): void {
  const dataset: number[] = [];
  nums.forEach((number) => {
    dataset[number] = (dataset[number] ?? 0) + 1
  })

  let index = 0;
  for (let i = 0; i < dataset.length; i++) {
    for (let j = 0; j < dataset[i]; j++) {
      nums[index] = i
      index++
    }
  }
}

describe('Sort Colors 테스트', () => {
  test('기본 케이스: [2,0,2,1,1,0] -> [0,0,1,1,2,2]', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test('이미 정렬된 배열: [0,1,2]', () => {
    const nums = [0, 1, 2];
    sortColors(nums);
    expect(nums).toEqual([0, 1, 2]);
  });

  test('역순 정렬된 배열: [2,1,0]', () => {
    const nums = [2, 1, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 1, 2]);
  });

  test('같은 색상만: [1,1,1,1]', () => {
    const nums = [1, 1, 1, 1];
    sortColors(nums);
    expect(nums).toEqual([1, 1, 1, 1]);
  });

  test('두 색상만: [0,2,0,2]', () => {
    const nums = [0, 2, 0, 2];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 2, 2]);
  });

  test('단일 원소: [1]', () => {
    const nums = [1];
    sortColors(nums);
    expect(nums).toEqual([1]);
  });

  test('빈 배열: []', () => {
    const nums: number[] = [];
    sortColors(nums);
    expect(nums).toEqual([]);
  });

  test('모든 0: [0,0,0]', () => {
    const nums = [0, 0, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 0]);
  });

  test('모든 2: [2,2,2]', () => {
    const nums = [2, 2, 2];
    sortColors(nums);
    expect(nums).toEqual([2, 2, 2]);
  });

  test('큰 배열 테스트', () => {
    const nums = [2, 0, 1, 2, 1, 0, 2, 1, 0, 1, 2, 0];
    sortColors(nums);
    expect(nums).toEqual([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2]);
  });
});
