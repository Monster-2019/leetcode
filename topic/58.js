/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let arr = s.split(' ').filter(str => str.length !== 0)
    if (!arr.length) return 0
    return arr[arr.length - 1].length || 0
};

// 68ms 98.83%; 37.9mb 32.44%;