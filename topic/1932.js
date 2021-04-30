/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    return nums.reduce((total, num) => num === target ? total + 1 : total, 0)
};

// 88ms 52.41%; 39.1mb 36.15%;