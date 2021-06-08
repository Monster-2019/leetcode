/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let index = 1
  while (n > 0) {
    if (n >= index) {
      n -= index++
    } else {
      n = 0
    }
  }
  return index - 1
};

let a = arrangeCoins(1)
console.log(a)

// 112ms 78.40%; 39.1mb 88.11%;