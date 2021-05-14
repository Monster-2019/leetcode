/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let arr = [...new Set(nums)].sort((a, b) => b - a)
    return arr[2] !== undefined ? arr[2] : arr[0]
};

// 76ms 96.97%; 39.5mb 58.65%;