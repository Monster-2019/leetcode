/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    // return Number(eval(s.replace(/\(|\)|\s/g, '')))
    return Number(eval(s))
};
console.log(calculate("- (3 + (4 + 5))"))