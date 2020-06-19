var twoSum = function(nums, target) {
    const len = nums.length
    for (let i = 0; i < len; i++) {
        let newIndex = nums.indexOf(target - nums[i])
        while (newIndex !== -1) {
            if (newIndex === i) {
                newIndex = nums.indexOf(target - nums[i], i + 1)
            } else if (newIndex === -1 || newIndex !== i) {
                break
            }
        }
        if (i !== -1 && newIndex !== -1) return [i, newIndex]
    }
};