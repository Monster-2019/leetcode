/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
    return new Set(astr.match(/[a-z]/g)).size === astr.length
};