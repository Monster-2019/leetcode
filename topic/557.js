/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ').map(str => {
        return str.split('').reverse().join('')
    }).join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))

// 112ms 22.58%; 43.8mb 76.94%;