/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {}
  let max = 0
  let key = ''
  for (let num of nums) {
    if (!(num in obj)) {
      obj[num] = 1
      if (!key) {
        key = num
        max = obj[num]
      }
    } else {
      obj[num]++
      if (obj[num] > max) {
        key = num
        max = obj[num]
      }
    }
  }
  return max >= Math.ceil(nums.length / 2) ? key : -1
};

let a = majorityElement([2, 2, 2, 3, 3, 4, 4])
console.log(a)

// 76ms 98.04%; 41.7mb 23.52%;