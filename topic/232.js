/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.array = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.array.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.array.splice(0, 1)[0]
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.array[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.array.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

let myQueue = new MyQueue();
myQueue.push(1) // queue is: [1]
myQueue.push(2) // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()) // return 1
console.log(myQueue.pop()) // return 1, queue is [2]
console.log(myQueue.empty()) // return false