
const factorial = (n, p=1n) => n === 1n ? p : factorial(n - 1n, p * n)

console.log(factorial(100n).toString().split('').reduce((s, n) => s + parseInt(n), 0))
