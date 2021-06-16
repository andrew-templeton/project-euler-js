
const step = list => [...list, (list[list.length - 2] || 0) + (list[list.length - 1] || 1)]
const upto = n => list => list[list.length - 1] > n ? list.slice(0, -1) : upto(n)(step(list))

const even = n => n % 2 === 0
const add = (a, b) => a + b

console.log(upto(4 * 1000 * 1000)([]).filter(even).reduce(add, 0))
