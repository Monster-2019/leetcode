/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let formatStr = (str) => {
        return str.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')
    }
    return formatStr(s) === formatStr(t)
};

console.log(isAnagram("anagram", "nagaram"))