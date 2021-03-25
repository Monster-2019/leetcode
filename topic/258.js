/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let str = String(num)
    while (str.length !== 1) {
        str = String(str.split('').reduce((t, n) => Number(t) + Number(n)))
    }
    return Number(str)
};

console.log(addDigits(38))