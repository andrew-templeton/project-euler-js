

const fibBelow = n => {
  const list = []
  let current = 1
  while (true) {
    current = (list[list.length - 2] || 0) + (list[list.length - 1] || 1)
    if (current > n) {
      return list
    }
    list.push(current)
  }
}

const even = n => n % 2 === 0
const add = (a, b) => a + b

console.log(fibBelow(4 * 1000 * 1000).filter(even).reduce(add, 0))
