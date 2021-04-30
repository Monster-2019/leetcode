/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let result = []
    ops.forEach(item => {
        if (!isNaN(Number(item))) {
            result.push(Number(item))
        } else {
            switch (item) {
                case '+':
                    result.push(result[result.length - 2] + result[result.length - 1])
                    break
                case 'D':
                    result.push(result[result.length - 1] * 2)
                    break
                case 'C':
                    result.splice(result.length - 1, 1)
                    break
                default:
                    break
            }
        }
    })
    return result.reduce((total, num) => total + num, 0)
};

console.log(calPoints(["5", "2", "C", "D", "+"]))

// 104ms 17.91%; 38.7mb 58.28%;