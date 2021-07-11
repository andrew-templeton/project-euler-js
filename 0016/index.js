
const bigPow = (base, pow, accum=1n) => pow === 0n ? accum : bigPow(base, pow - 1n, accum * base)
const digitSum = n => n.toString().split('').reduce((s, n) => s + parseInt(n), 0)

console.log(digitSum(bigPow(2n, 1000n)))
