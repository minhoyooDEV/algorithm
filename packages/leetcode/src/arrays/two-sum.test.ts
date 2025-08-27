import { describe, it, expect } from 'vitest'
import { twoSum } from './two-sum'

describe('twoSum', () => {
  it('basic case', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  })
  it('no result', () => {
    expect(twoSum([1, 2, 3], 100)).toEqual([])
  })
})

