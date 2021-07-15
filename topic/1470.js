/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  for (let i = 0; i < n - 1; i++) {
    nums.splice(2 * i + 1, 0, nums.splice(n + i, 1)[0])
  }
  return nums
};

let a = shuffle([2, 5, 1, 3, 4, 7], 3)
console.log(a)

// 88ms 88.86%; 39.6mb 37.69%;