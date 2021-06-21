/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let str = s.match(/\d+/g)
  if (str) {
    str = str.join('')
    return [...new Set(str.split(''))].sort((a, b) => b - a)[1] || -1
  } else {
    return -1
  }
};

let a = secondHighest("xyz")
console.log(a)

// 80ms 95.85%; 39.2mb 75.10%;