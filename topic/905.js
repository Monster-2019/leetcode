/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    return nums.sort((a, b) => a % 2 === 0 ? -1 : 1)
};

// 116ms 32.35%; 40mb 74.87%;