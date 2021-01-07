/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sArr = ''
    let tArr = ''
    if (s.length > t.length) {
        sArr = s.split('').sort().join('')
        tArr = t.split('').sort().join('')
    } else {
        sArr = t.split('').sort().join('')
        tArr = s.split('').sort().join('')
    }
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) return sArr[i]
    }
};
a = findTheDifference("abcd", "abcde")
console.log(a)