/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.arr = []
    this.arr.push(homepage)
    this.index = 0
    this.name = this.arr[this.index]
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.arr.splice(this.index + 1, this.arr.length - this.index + 1)
    this.index += 1
    this.arr.push(url)
    this.name = this.arr[this.index]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    this.index -= steps
    if (this.index < 0) this.index = 0
    this.name = this.arr[this.index]
    return this.arr[this.index]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    this.index += steps
    if (this.index > this.arr.length - 1) this.index = this.arr.length - 1
    this.name = this.arr[this.index]
    return this.arr[this.index]
};

// 232ms 96.97%; 48mb 93.94%;