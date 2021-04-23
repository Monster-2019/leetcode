/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums2.forEach(item => {
        let i = nums1.findIndex(itm => itm > item)
        nums1.splice(i === -1 ? nums1.length - n : i, 0, item)
    })
    new Array(n).fill(0).forEach(item => {
        nums1.pop()
    })
    return nums1
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

// 112ms 6.04%; 39.1mb 7.33%;