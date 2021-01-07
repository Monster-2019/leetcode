/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let matchList = s.match(/(\w)\1*/g)
    let arr = []
    let index = 0
    matchList.forEach(item => {
        if (item.length >= 3) {
            let start = s.indexOf(item, index)
            let end = s.indexOf(item, index) + item.length - 1
            index = end
            arr.push([start, end])
        }
    })
    return arr
};
a = largeGroupPositions("nnnhaaannnm")
console.log(a)