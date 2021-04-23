/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
    let result = 0
    nums.forEach(num => {
        let arr = []
        let median = num % 2 === 0 ? num / 2 : Math.floor(num / 2)
        while (median !== 0) {
            if (num % median === 0) {
                arr.push(median, num / median)
                arr = Array.from(new Set(arr))
            }
            if (arr.length > 4) break
            median = median - 1
        }
        if (arr.length === 4) {
            result += arr.reduce((total, num) => total + num, 0)
        }
    })
    return result
};

console.log(sumFourDivisors([21, 21]))

// 8512ms 6.90%; 44.8mb 31.03%;