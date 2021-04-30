/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let max = ''
    let result = []
    for (let i = 1; i <= n; i++) {
        max += '9'
    }
    max = Number(max)
    for (let i = 1; i <= max; i++) {
        result.push(i)
    }
    return result
};

// 140ms 30.13%; 48.6mb 34.63%;