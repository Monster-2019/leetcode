var reverse = function(x) {
    let strX = x.toString()
    let strArr = strX.split('')
    const less = strArr.includes('-')
    let res = 0
    if (less) {
        strArr.splice(strArr.indexOf('-'), 1)
        res = '-' + strArr.reverse().join('')
    } else {
        res = strArr.reverse().join('')
    }
    return Math.abs(res) > (2 ** 31) ? 0 : res
};