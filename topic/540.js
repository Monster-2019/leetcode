/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    return nums.find((item, index) => nums.indexOf(item) === index && nums.indexOf(item, index + 1) === -1)
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))