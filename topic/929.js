/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let result = emails.map(item => {
        let arr = item.split('@')
        arr[0] = arr[0].slice(0, arr[0].indexOf('+') > 0 ? arr[0].indexOf('+') : arr[0].length)
        arr[0] = arr[0].replace(/\./g, '')
        return arr[0] + '@' + arr[1]
    })
    return Array.from(new Set(result)).length
};

console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]))

// 100ms 73.42%; 41.8mb 84.81%;