import { describe, it, expect } from 'vitest'
import { solve } from './abc086a'

describe('atcoder abc086a', () => {
  it('Even case', () => {
    expect(solve('3 4\n')).toBe('Even')
  })
  it('Odd case', () => {
    expect(solve('1 3\n')).toBe('Odd')
  })
})

