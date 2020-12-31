/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    let a = 1
    let b = 1
    let tem
    for (let i = 0; i < n; i++) {
        tem = a 
        a = b
        b += tem
    }
    return a % 1000000007 === 1000000008 ? 1 : a % 1000000007
};
a = numWays(78)
console.log(a)