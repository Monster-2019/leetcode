var lastStoneWeight = function(stones) {
    const smash = (maxArr) => {
        return maxArr[0] === maxArr[1] ? 0 : maxArr[0] < maxArr[1] ? maxArr[1] - maxArr[0] : maxArr[0] - maxArr[1]
    }

    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        let result = smash(stones.splice(0, 2))
        if (result !== 0) stones.push(result)
    }

    return stones[0] || 0
};
console.log(lastStoneWeight([2,7,4,1,8,1]))