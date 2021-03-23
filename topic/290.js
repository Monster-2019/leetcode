/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let newS = s.replace(/\s/g, '')
    console.log(pattern.split(''))
    console.log(newS)
};

console.log(wordPattern('abba', 'dog cat cat dog'))