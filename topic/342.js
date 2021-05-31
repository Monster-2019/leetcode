/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let i = 0
  while (4 ** i < n) {
    i++
  }
  return 4 ** i === n
};

// 84ms 98.03%; 39.2mb 52.13%;