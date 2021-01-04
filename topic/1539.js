/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let len = arr[arr.length - 1] + k
    let newArr = []
    for (let i = 1; i <= len; i++) {
        if (!arr.includes(i)) newArr.push(i)
        if (newArr.length >= k) return newArr[k - 1]
    }
};
a = findKthPositive([1,2,3,4], 2)
console.log(a)