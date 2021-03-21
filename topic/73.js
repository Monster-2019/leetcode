/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = []
    let col = []
    let len = matrix.length
    matrix.forEach((item, r) => {
        if (item.includes(0) && !row.includes(r)) row.push(r)
        item.forEach((el, c) => {
            if (el === 0 && !col.includes(c)) {
                col.push(c)
            }
        })
    })
    for (let i = 0; i < len; i++) {
        let childLen = matrix[i].length
        if (row.includes(i)) {
            matrix[i] = Array(childLen).fill(0)
            continue
        } else {
            for (let index = 0; index < childLen; index++) {
                if (col.includes(index)) matrix[i][index] = 0
            }
        }
    }
    return matrix
};

console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))