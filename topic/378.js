/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let arr = []
    matrix.forEach(item => {
        arr = [...arr, ...item]
    })
    return arr.sort((a, b) => a - b)[k - 1]
};

console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8))

// 168ms 20.88%; 61.8mb 5.22%;