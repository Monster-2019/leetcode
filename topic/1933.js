/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  let len = guess.length
  let count = 0
  for (let i = 0; i < len; i++) {
    if (guess[i] === answer[i]) count++
  }
  return count
};

// 72ms 93.79%; 37.6mb 56.85%;