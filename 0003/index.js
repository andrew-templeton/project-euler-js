

const lpf = (n, base=[2]) => {
  const last = () => base[base.length - 1]
  if (last() * last() > n) {
    return n
  }
  if (n % last() === 0) {
    return lpf(n / last(), base)
  }
  return lpf(n, genPrime(base))
}

const genPrime = (base, n=base[base.length - 1] + 1) => !base.some(p => n % p === 0) ? [...base, n] : genPrime(base, n + 1)


console.log(lpf(600851475143))
