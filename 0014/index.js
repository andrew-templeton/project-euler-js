
// DOES NOT WORK

const collatz = (n, length=0) => n === 1 ? length + 1 : collatz(n % 2 === 0 ? (n / 2) : (3 * n + 1), length + 1)

const merge = (hash, key, value) => ({ ...hash, [key]: value })

const maxCollatz = (cap, n=1, hash={}, max=0) => {
  if (n >= cap) {
    return max
  }
  const hit = hash[n]
  if (hit) {
    return maxCollatz(cap, n + 1, hash, max)
  }
  const result = collatz(n)
  return Math.max(max, maxCollatz(cap, n + 1, merge(hash, n, result), max))
}

console.log(maxCollatz(13))
