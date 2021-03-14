/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let arr = Array(num_people).fill(0)
    let index = 0
    let count = 1
    while (candies > 0) {
        if (index === num_people) index = 0
        arr[index] = arr[index++] + (candies > count ? count : candies)
        candies -= count++
    }
    return arr
};

console.log(distributeCandies(7, 4))