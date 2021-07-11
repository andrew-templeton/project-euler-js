// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

const naturals = n => new Array(n).fill().map((_, i) => i + 1)

const square = n => n * n



const to1000 = naturals(1000)
const square1000 = to1000.map(square)

const specialPair = to1000.reduce((answer, n, i) => to1000.reduce((answer, m, j) => answer || ((square(1000 - n - m) === square1000[i] + square1000[j]) && [n, m]), answer), null)

console.log([...specialPair, 1000 - specialPair[0] - specialPair[1]].reduce((a, b) => a * b, 1))
