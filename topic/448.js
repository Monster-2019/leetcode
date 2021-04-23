/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let len = nums.length
    let arr = []
    for (let i = 1; i <= len; i++) {
        if (nums.indexOf(i) === -1) arr.push(i)
    }
    return arr
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))

// 8884ms 5.02%; 45.8mb 71.16%;