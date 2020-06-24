var findMedianSortedArrays = function(nums1, nums2) {
    const newNums = nums1.concat(nums2)
    newNums.sort(function (a, b) { return a - b > 0 ? 1 : -1})
    const len = newNums.length
    if (len % 2 != 0) {
        return newNums[Math.floor(len / 2)]
    } else {
        return (newNums[len / 2 - 1] + newNums[len / 2]) / 2
    }
}