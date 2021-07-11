// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.


// DOES NOT WORK




const genPrime = (base, n=base[base.length - 1] + 1) => !base.filter(b => b * b <= n).some(p => n % p === 0) ? [...base, n] : genPrime(base, n + 1)

const primesBelow = (n, base=[2]) => {
  if (base.length % 1000 === 0) {
    console.log(base[base.length - 1])
  }
  return n < base[base.length - 1] ? base.slice(0, -1) : primesBelow(n, genPrime(base))
}

console.log(primesBelow(2 * 1000 * 1000).reduce((a, b) => a + b, 0))
