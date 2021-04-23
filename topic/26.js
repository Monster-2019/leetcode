/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = nums.indexOf(nums[i], i + 1)
        while (index > -1) {
            nums.splice(index, 1)
            index = nums.indexOf(nums[i], i + 1)
        }
    }
    return nums.length
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// 280ms 7.22%; 40.5mb 21.37%;