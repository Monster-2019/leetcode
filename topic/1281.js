/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let numList = String(n).split('')
    return numList.reduce((res, num) => res * Number(num), 1) - numList.reduce((res, num) => res + Number(num), 0)
};

console.log(subtractProductAndSum(4421))

//  76ms 90.39%; 37.7mb 85.21%;