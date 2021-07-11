const powerSet = set => set.reduce((subsets, value) => subsets.concat(subsets.map(set => [...set, value])), [[]])


const permute = nums => nums.length <= 1 ? nums : nums.map((n, index) => {
  const remainingNums = [...nums.slice(0, index), ...nums.slice(index + 1)]
  const remainingNumsPermuted = permute(remainingNums)
  return remainingNumsPermuted.map(m => [n, ...m])
})

console.log(permute([1, 2, 3]))

module.exports = {
  powerSet, permute
}
