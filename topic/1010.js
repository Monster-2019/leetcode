/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let len = time.length
  let count = 0
  for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
          if ((time[i] + time[j]) % 60 === 0) count++
      }
  }
  return count
};

// 5308ms 14.28%; 41mb 80.95%;