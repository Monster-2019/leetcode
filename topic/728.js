/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = []
    for (let i = left; i <= right; i++) {
        let res = String(i).split('').find(num => i % Number(num) !== 0)
        if (res === undefined) result.push(i)
    }
    return result
};

// 124ms 6.8%; 40.7mb 26.7%;