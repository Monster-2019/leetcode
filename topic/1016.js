/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function (S, N) {
    for (let i = 1; i <= N; i++) {
        if (S.indexOf((i).toString(2)) === -1) return false
    }
    return true
};

console.log(queryString("0110", 4))

// 72ms 93.55%; 37.8mb 9.68%;