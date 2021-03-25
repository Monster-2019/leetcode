/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let [arr1, arr2] = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2]
    let result = []
    arr1.forEach(item => {
        if (arr2.includes(item)) {
            result.push(item)
            arr2.splice(arr2.indexOf(item), 1)
        }
    })
    return result
};

console.log(intersect([3, 1, 2], [1, 1]))