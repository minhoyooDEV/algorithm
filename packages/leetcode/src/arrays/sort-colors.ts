/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
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
