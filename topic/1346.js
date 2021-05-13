/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    return arr.findIndex((num, i) => {
        let index = arr.findIndex(n => (num / 2) === n)
        return index !== -1 && index !== i
    }) !== -1
};

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]))

// 80ms 88%; 39.2mb 43.2%;