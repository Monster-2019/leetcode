/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
    let res = nums.find((item, index) => item === index)
    return res !== undefined ? res : -1
};

// 84ms 78.95%; 40.1mb 33.01%;