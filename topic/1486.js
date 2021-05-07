/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    return new Array(n).fill(0).map((item, i) => start + i * 2).reduce((count, num) => count ^ num, 0)
};

// 76ms 87.5%; 38mb 24.65%;