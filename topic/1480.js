/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        nums[i] = (nums[i] + (nums[i - 1] ? nums[i - 1] : 0))
    }
    return nums
    // return nums.map((num, index, arr) => arr.slice(0, index + 1).reduce((total, num) => total + num))
};

console.log(runningSum([1,1,1,1]))