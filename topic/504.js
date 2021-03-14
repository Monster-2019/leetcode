/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    let negative = num < 0
    let remainder = Math.abs(num)
    let s = String(remainder % 7)
    while (remainder >= 7) {
        let tem = Math.floor(remainder / 7)
        if (tem === 7) {
            s += '0'
        } else if (tem >= 7) {
            s += tem % 7
        } else {
            s += tem
        }
        remainder = tem
    }
    s = s.split('').reverse().join('')
    return negative ? '-' + s : s
};

console.log(convertToBase7(56))