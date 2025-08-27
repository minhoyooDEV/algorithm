import { describe, it, expect } from 'vitest'
import { weirdAlgorithm } from './weird-algorithm'

describe('cses weirdAlgorithm', () => {
  it('n=3', () => {
    expect(weirdAlgorithm(3)).toEqual([3, 10, 5, 16, 8, 4, 2, 1])
  })
})

