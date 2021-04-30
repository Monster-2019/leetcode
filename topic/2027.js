/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
    if (!k) return []
    let result = []
    for (let i = 0; i <= k; i++) {
        let j = k - i
        result.push(shorter * i + longer * j)
    }
    return Array.from(new Set(result)).sort((a, b) => a - b)
};

console.log(divingBoard(1, 1, 0))

// 180ms 39.67%; 56mb 14.73%;