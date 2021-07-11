const genPrime = (base, n=base[base.length - 1] + 1) => !base.some(p => n % p === 0) ? [...base, n] : genPrime(base, n + 1)

const nthPrime = (n, base=[2]) => n === base.length ? base[base.length - 1] : nthPrime(n, genPrime(base))

console.log(nthPrime(3))
