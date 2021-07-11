//
//
//
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//
//
// How many such routes are there through a 20×20 grid?



// Since there MUST be 20 right, and 20 down, you can think of this as labeling
//   the order in which they occur. The index of the movements is always 40.
// So, this is a partition of two groups of 20 fungible moves.

// 40 choose 20!

const range = (n, m) => new Array(m - n).fill().map((_, i) => i + n + 1)
const multiply = (a, b) => a * b
const product = list => list.reduce(multiply, 1)
const permute = (n, m=n) => product(range(n - m, n))
const choose = (n, m) => permute(n, m) / permute(m)

console.log(choose(40, 20))
