/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let arr = []
    let w = 1
    let h = area
    while (w <= area) {
        while (h > 0) {
            if (w * h === area && w >= h) arr.push([w, h])
            h--
        }
        h = area
        w++
    }
    arr.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
    return arr[0]
};

console.log(constructRectangle(4))