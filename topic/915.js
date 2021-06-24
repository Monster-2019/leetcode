/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let count = 1
  let max = nums[0]
  let arr = nums.slice(1)
  while (max > Math.min(...arr)) {
    let newVal = arr.shift()
    if (newVal > max) max = newVal
    count++
  }
  return count
};

let a = partitionDisjoint([5, 0, 3, 8, 6])
console.log(a)

// 4404ms 5.36%; 42.1mb 73.21%;