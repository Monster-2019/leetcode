/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.nums = [...nums].sort((a, b) => b - a)
    this.index = k - 1
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    let index = this.nums.findIndex(num => num < val)
    if (index > -1) {
        this.nums.splice(this.nums.findIndex(num => num < val), 0, val)
    } else {
        this.nums.push(val)
    }
    return this.nums[this.index]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

let kthLargest = new KthLargest(1, [-2]);
kthLargest.add(-3);   // return 4
kthLargest.add(0);   // return 5
kthLargest.add(2);  // return 5
kthLargest.add(-1);   // return 8
kthLargest.add(4);   // return 8

// 296ms 31.38%; 46.6mb 36.3%;