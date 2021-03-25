/**
 * @param {number} num
 * @return {string}
 */
 var printBin = function(num) {
    let binaryNum = parseFloat(num).toString(2)
    return binaryNum.length <= 32 ? binaryNum : 'ERROR'
};