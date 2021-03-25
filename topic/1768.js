/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let [arr1, arr2] = [word1.split(''), word2.split('')]
    let len = word1.length > word2.length ? word1.length : word2.length
    let str = ''
    for (let i = 0; i < len; i++) {
        str += ((arr1[i] ? arr1[i] : '') + (arr2[i] ? arr2[i] : ''))
    }
    return str
};

console.log(mergeAlternately('abcd', 'pq'))