/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let count = triangle[0][0]
    let i = 0
    triangle.forEach((item, index) => {
        if (index !== 0) {
            i = item[i] < item[i + 1] ? i : i + 1
            count += item[i]
        }
    })

    return count
};
a = minimumTotal([
  [-1],
 [2, 3],
[1, -1, -3]
])
console.log(a)