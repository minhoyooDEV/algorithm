export class UnionFind {
  private parent: number[]
  private rank: number[]
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i)
    this.rank = Array(n).fill(0)
  }
  find(x: number): number {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x])
    return this.parent[x]
  }
  union(a: number, b: number): boolean {
    let ra = this.find(a), rb = this.find(b)
    if (ra === rb) return false
    if (this.rank[ra] < this.rank[rb]) [ra, rb] = [rb, ra]
    this.parent[rb] = ra
    if (this.rank[ra] === this.rank[rb]) this.rank[ra]++
    return true
  }
}

export function parseLines(input: string): string[] {
  return input.trim().split(/\r?\n/)
}

export function toNums(tokens: string[]): number[] {
  return tokens.filter(Boolean).map(Number)
}

export function dijkstra(n: number, edges: Array<[number, number, number]>, src: number): number[] {
  const adj: [number, number][][] = Array.from({ length: n }, () => [])
  for (const [u, v, w] of edges) adj[u].push([v, w])
  const dist = Array(n).fill(Infinity)
  dist[src] = 0
  // simple O(E log V) using binary heap via array (small n)
  const heap: [number, number][] = [[0, src]]
  const cmp = (a: [number, number], b: [number, number]) => a[0] - b[0]
  const push = (x: [number, number]) => {
    heap.push(x)
    let i = heap.length - 1
    while (i > 1 && cmp(heap[i], heap[i >> 1]) < 0) {
      ;[heap[i], heap[i >> 1]] = [heap[i >> 1], heap[i]]
      i >>= 1
    }
  }
  const pop = (): [number, number] | undefined => {
    if (heap.length === 1) return undefined
    const top = heap[1] ?? heap[0]
    const last = heap.pop()!
    if (heap.length > 1) {
      heap[1] = last
      let i = 1
      while (true) {
        let l = i << 1, r = l + 1, m = i
        if (l < heap.length && cmp(heap[l], heap[m]) < 0) m = l
        if (r < heap.length && cmp(heap[r], heap[m]) < 0) m = r
        if (m === i) break
        ;[heap[i], heap[m]] = [heap[m], heap[i]]
        i = m
      }
    }
    return top
  }
  // initialize heap to be 1-indexed
  heap.unshift(heap[0])
  while (true) {
    const cur = pop()
    if (!cur) break
    const [d, u] = cur
    if (d !== dist[u]) continue
    for (const [v, w] of adj[u]) {
      if (dist[v] > d + w) {
        dist[v] = d + w
        push([dist[v], v])
      }
    }
  }
  return dist
}

