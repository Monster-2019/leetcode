var isPalindrome = function(x) {
    let str1 = x.toString()
    let str2 = str1.slice().split('').reverse().join('')
    return str1 === str2 ? true : false
};