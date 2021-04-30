/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    let result = 0
    piles.sort((a, b) => b - a)
    let count = piles.length / 3
    for (let i = 0; i < count; i++) {
        result += piles[(2 * i + 1)]
    }
    return result
};

console.log(maxCoins([2, 4, 1, 2, 7, 8]))

// 260ms 50.75%; 48.3mb 40.30%;