/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return Array.from(new Set(nums)).find(num => nums.filter(item => item === num).length > Math.floor(nums.length / 2))
};

// 100ms 32.58%; 42.6mb 5.02%;