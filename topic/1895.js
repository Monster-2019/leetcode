/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  return coins.map(item => Math.ceil(item / 2)).reduce((total, item) => total + item, 0)
};

// 76ms 90.84%; 37.8mb 43.96%;