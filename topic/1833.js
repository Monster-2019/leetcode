/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  let count = 0
  costs.sort((a, b) => a - b)
  for (let num of costs) {
    if (coins - num >= 0) {
      count++
      coins -= num
    } else {
      break
    }
  }
  return count
};

let a = maxIceCream([1, 6, 3, 1, 2, 5], 20)
console.log(a)

// 336ms 16.64%; 51.7mb 27.79%;