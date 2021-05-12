/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    return nums.map((num, i, arr) => {
        return arr.filter(item => item < num).length
    })
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]))

// 132ms 14.95%; 43.3mb 13.75%;