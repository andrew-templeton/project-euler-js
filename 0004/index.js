'use strict'
//
//
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.
//


const isPalindrome = n => n.toString().split('').reverse().join('') === n.toString()
const cap = length => Math.pow(10, length) - 1
const base = length => Math.pow(10, length - 1)

const palindromeWithFactor = (fixed, minimum, inc=fixed) => {
  const product = fixed * inc
  return isPalindrome(product) ? product : minimum < product ? palindromeWithFactor(fixed, minimum, inc - 1) : 0
}

const bigPalindrome = length => new Array(cap(length) - base(length) + 1)
  .fill()
  .map((_, i) => i + base(length))
  .reduce((largest, next) => Math.max(palindromeWithFactor(next, largest), largest), 0)

console.log(bigPalindrome(3))
