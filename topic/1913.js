/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b)
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1]
};

// 112ms 77.61%; 40.6mb 36.82%;