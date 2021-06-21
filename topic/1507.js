/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  let monthList = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let arr = date.split(' ')
  let zeroP = (val) => {
    return String(val).length === 2 ? val : '0' + val
  }
  let year = arr[2]
  let month
  for (month = 0; month < monthList.length; month++) {
    if (monthList[month] === arr[1]) break
  }
  let day = zeroP([...arr[0].match(/\d+/g)][0])
  return `${year}-${zeroP(month)}-${day}`
};

let a = reformatDate("20th Oct 2052")
console.log(a)

// 84ms 66.67%; 37.9mb 61.29%;