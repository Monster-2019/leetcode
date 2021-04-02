/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let count = numBottles
    let emptyBottle = numBottles

    while (emptyBottle >= numExchange) {
        let changeNum = Math.floor(emptyBottle / numExchange)
        let remainingNum = emptyBottle % numExchange
        count += changeNum
        emptyBottle = changeNum + remainingNum
    }

    return count
};

console.log(numWaterBottles(9, 3))