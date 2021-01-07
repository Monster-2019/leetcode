/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let indexList = []
    hours.forEach((item, index) => {
        if (item > 8) indexList.push(index)
    })
    console.log(indexList)
};
a = longestWPI([9,9,6,0,6,6,9])
console.log(a)