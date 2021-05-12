/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
    return new Array(s.length - 1).fill(0).filter((chat, i) => {
        let [a, b] = [s.slice(0, i + 1), s.slice(i + 1)]
        return [...new Set(a)].join('').length === [...new Set(b)].join('').length
    }).length
};

console.log(numSplits('acbadbaada'))

// 超时