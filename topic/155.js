/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.shift()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.arr)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// 348ms 8.02%; 44.9mb 67.89%;