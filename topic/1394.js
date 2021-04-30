/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let array = Array.from(new Set(arr)).sort((a, b) => b - a)
    let result = array.find(item => {
        return (arr.filter(itm => itm === item).length === item)
    })
    return result || -1
};

console.log(findLucky([7, 7, 7, 7, 7, 7, 7]))

// 84ms 82.47%; 39.2mb 69.07%;