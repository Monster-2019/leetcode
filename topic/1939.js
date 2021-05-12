/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let str = ''
    for (let i = 0; i <= n; i++) {
        str += i
        if (str.length > n) break
    }
    return str[n]
};

console.log(findNthDigit(100000000))

// 内存超出