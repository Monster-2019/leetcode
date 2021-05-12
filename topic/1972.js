/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
    return s1.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') === s2.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')
};

// 84ms 51.85%; 37.7mb 47.65%;