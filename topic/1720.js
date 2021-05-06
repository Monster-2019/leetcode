/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    const len = encoded.length + 1;
    const arr = new Array(len).fill(0);
    arr[0] = first;
    for (let i = 1; i < len; i++) {
        arr[i] = arr[i - 1] ^ encoded[i - 1];
    }
    return arr
};

// 132ms 60.95%; 44.4mb 50.84%;