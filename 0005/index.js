// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?




const factorize = (n, base=[2], factors=[], prime=0) => {
  const current = () => base[prime]
  if (n === 1) {
    return [n, base, factors]
  }
  if (!current()) {
    return factorize(n, genPrime(base), factors, prime + 1)
  }
  if (current() * current() > n) {
    return [n, [...base, n], [...factors, n]]
  }
  if (n % current() === 0) {
    return factorize(n / current(), base, [...factors, current()], prime)
  }
  return factorize(n, base, factors, prime + 1)
}

const genPrime = (base, n=base[base.length - 1] + 1) => !base.some(p => n % p === 0) ? [...base, n] : genPrime(base, n + 1)

const count = list => list.reduce((counts, next) => ({ ...counts, [next]: (counts[next] || 0) + 1 }), {})

const factorList = list => list.reduce(([primes, base], next) => {
  const [_, newBase, factors] = factorize(next, base)
  const counts = count(factors)
  const largeCount = Object.keys(counts).reduce((maxes, factor) => ({ ...maxes, [factor]: Math.max(maxes[factor] || 0, counts[factor]) }), primes)
  return [largeCount, newBase]
}, [{}, [2]])[0]

const lcm = list => {
  const factors = factorList(list)
  return Object.keys(factors).reduce((product, factor) => product * Math.pow(parseInt(factor), factors[factor]), 1)
}

console.log(lcm(new Array(20).fill().map((_, i) => i + 1)))
