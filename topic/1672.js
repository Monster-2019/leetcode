/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(...accounts.map(item => item.reduce((total, itm) => total + itm, 0)))
};

// 84ms 67.16%; 38.8mb 49.22%;