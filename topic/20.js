/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = []
  let isMatch = (char) => {
    let result = false
    switch (char) {
      case '(':
      case '{':
      case '[':
        arr.push(char)
        result = true
        break

      case ')':
        result = arr.pop() === '('
        break

      case '}':
        result = arr.pop() === '{'
        break

      case ']':
        result = arr.pop() === '['
        break
    }
    return result
  }
  for (let i = 0; i < s.length; i++) {
    if (!isMatch(s[i])) return false
  }

  return arr.length === 0
};

let a = isValid("{[]}")
console.log(a)

// 72ms 98.44%; 37.9mb 75.96%;