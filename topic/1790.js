/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let len = s1.length
  let diff1 = []
  let diff2 = []
  for (let i = 0; i < len; i++) {
    if (s1[i] !== s2[i]) {
      diff1.push(s1[i])
      diff2.push(s2[i])
    }
    if (diff1.length > 2) return false
  }
  diff1.sort()
  diff2.sort()
  return diff1.find((item, index) => item !== diff2[index]) ? false : true
};

a = areAlmostEqual('abcd', 'dcba')
console.log(a)

// 88ms 52.56%; 38.9mb 32.05%;