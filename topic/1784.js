/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    return s.length > 1 ? /1{2}/g.test(s) : true
};

console.log(checkOnesSegment('1'))