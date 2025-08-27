// CSES - Weird Algorithm
export function weirdAlgorithm(n: number): number[] {
  const res = [n]
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1
    res.push(n)
  }
  return res
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(weirdAlgorithm(3).join(' '))
}

