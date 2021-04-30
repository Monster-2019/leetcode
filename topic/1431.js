/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies)
    return candies.map(item => item + extraCandies >= max)
};

// 80ms 88.86%; 38.6mb 90.75%;