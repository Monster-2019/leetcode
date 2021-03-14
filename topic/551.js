/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    return !(/L{3}/g.test(s) || s.split('A').length - 1 >= 2)
};

console.log(checkRecord("AAAA"))