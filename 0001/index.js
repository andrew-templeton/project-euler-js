
const naturalSum = n => (1 + n) * n / 2
const multiplesUnder = cap => n => Math.floor((cap - 1) / n)
const summMultiplesUnder = cap => n => naturalSum(multiplesUnder(cap)(n)) * n
const powerSet = set => set.reduce((subsets, value) => subsets.concat(subsets.map(set => [...set, value])), [[]])
const powerIsh = set => powerSet(set).slice(1)
const product = set => set.reduce((p, n) => p * n, 1)
const sum = set => set.reduce((s, n) => s + n, 0)

const fizzBuzzIsh = list => cap => 2 * sum(list.map(summMultiplesUnder(cap))) - sum(powerIsh(list).map(product).map(summMultiplesUnder(cap)))

console.log(fizzBuzzIsh([3, 5])(1000))
