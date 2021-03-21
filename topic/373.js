/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    let arr = []
    nums1.forEach((item) => {
        nums2.forEach((el) => {
            arr.push([item, el])
        })
    })
    arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]))
    return arr.slice(0, k)
};

console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2))