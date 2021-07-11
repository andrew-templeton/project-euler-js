// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
//
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//
// Let us list the factors of the first seven triangle numbers:
//
//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
//
// What is the value of the first triangle number to have over five hundred divisors?

const triangular = n => n * (n + 1) / 2

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

const divisors = factors => Object.values(factors.reduce((counts, factor) => ({ ...counts, [factor]: (counts[factor] || 0) + 1 }), {})).reduce((product, count) => product * (count + 1), 1)

const triangularFactorsWithDivisors = (minDivisors, n=1, base=[2]) => {
  const triangle = triangular(n)
  const [_, newBase, factors] = factorize(triangle, base)
  return divisors(factors) >= minDivisors ? triangle : triangularFactorsWithDivisors(minDivisors, n + 1, newBase)
}

console.log(triangularFactorsWithDivisors(500))
