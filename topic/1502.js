/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => a - b)
  let diff = arr[1] - arr[0]
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      return false
    }
  }
  return true
};

let a = canMakeArithmeticProgression([1, 2, 4])
console.log(a)

// 88ms 64.91%; 38.7mb 89.91%;