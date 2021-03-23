/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0
    while (n) {
        count += String(n--).split(1).length - 1
    }
    return count
};

console.log(countDigitOne(1200000000))