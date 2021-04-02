/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    let count = 1
    while (nums.length > 0) {
        let tem = 1
        let min = Math.min(...nums)
        let index = nums.indexOf(min)
        let arr = [nums[index - 1] || 1, nums[index], nums[index + 1] || 1]
        arr.forEach(num => {
            tem *= num
        })
        count += tem
        nums.splice(index, 1)
        console.log(index, arr, nums, tem)
    }
    return count
};

console.log(maxCoins([3, 1, 5, 8]))