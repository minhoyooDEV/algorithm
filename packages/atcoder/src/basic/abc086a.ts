// AtCoder Beginner Contest 086 A - Product
// Input: two integers a b; Output: Even if a*b is even else Odd
import { parseLines, toNums } from '@algo/utils'

export function solve(input: string): string {
  const [a, b] = toNums(parseLines(input)[0].split(' '))
  return (a * b) % 2 === 0 ? 'Even' : 'Odd'
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // read stdin
  import('node:fs').then(({ readFileSync }) => {
    const data = readFileSync(0, 'utf8')
    process.stdout.write(solve(data) + '\n')
  })
}

