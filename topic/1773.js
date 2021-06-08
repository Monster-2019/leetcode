/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let index = 0
  switch (ruleKey) {
    case 'type':
      index = 0
      break
    case 'color':
      index = 1
      break
    case 'name':
      index = 2
      break
    default:
      break
  }
  return items.filter(item => item[index] === ruleValue).length
};

// 88ms 97.28%; 41.5mb 35.24%;