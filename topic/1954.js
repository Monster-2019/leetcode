/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let arr = [... new Set(nums)]
    return arr.find(num => {
        return nums.filter(item => item === num).length === 1
    })
};

console.log(singleNumber([5, 2, 2, 2, 5, 5, 4]))

// 1148ms 5.02%; 43.5mb 25.57%;