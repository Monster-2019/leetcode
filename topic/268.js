/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let result = 0
    nums.sort((a, b) => a - b)
    if (nums[0] !== 0) return 0
    nums.find((item, index) => {
        if (index !== item) {
            result = index
            return item
        } 
    })

    return result || nums.length
};
a = missingNumber([1])
console.log(a)