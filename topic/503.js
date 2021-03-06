/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
    let newArr = [...nums]
    return nums.map((item) => {
        newArr.push(...newArr.splice(0, 1))
        console.log(newArr, item, newArr.find(num => num > item) || -1)
        let tem = newArr.find(num => num > item)
        return tem !== undefined ? tem : -1
    })
};

console.log(nextGreaterElements([-1,0]))