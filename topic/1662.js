/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.reduce((string, str) => string += str, '') === word2.reduce((string, str) => string += str, '')
};

// 72ms 96.63%; 37.9mb 95.73%;