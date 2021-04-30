/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let index = nums.findIndex(item => item === target)
    if (index >= 0) {
        return index
    } else {
        let index = nums.findIndex(item => item > target)
        if (index >= 0) {
            return index
        } else {
            return nums.length
        }
    }
};

console.log(searchInsert([1, 3, 5, 6], 2))

// 80ms 81.04%; 38.9mb 34%;