/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let d = Math.ceil(num / 2)
    let result = []
    for (let i = d; i > 0; i--) {
        if (num % i === 0) {
            result.push(i)
            result.push(num / i)
        }
    }
    result = Array.from(new Set(result))
    result.splice(result.indexOf(num), 1)
    return result.length > 0 && result.reduce((t, n) => t + n) === num
};

console.log(checkPerfectNumber(1))