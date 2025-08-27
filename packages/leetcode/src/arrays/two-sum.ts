// LeetCode 1. Two Sum
export function twoSum(nums: number[], target: number): [number, number] | [] {
  const mp = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]
    if (mp.has(need)) return [mp.get(need)!, i]
    mp.set(nums[i], i)
  }
  return []
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // quick demo
  console.log(twoSum([2, 7, 11, 15], 9))
}

