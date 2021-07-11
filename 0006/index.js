// The sum of the squares of the first ten natural numbers is,
//
// The square of the sum of the first ten natural numbers is,
//
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


const square = x => x * x
const sum = (x, y) => x + y
const naturals = n => new Array(n).fill().map((_, i) => i + 1)
const sumOfSquares = n => naturals(n).map(square).reduce(sum, 0)
const squareOfSums = n => square(naturals(n).reduce(sum, 0))
const squareDiff = n => squareOfSums(n) - sumOfSquares(n)
console.log(squareDiff(100))
