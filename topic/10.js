var isMatch = function(s, p) {
    let reg = new RegExp('^' + p + '$', 'g')
    return (p.indexOf('*') >= 0 || p.length === s.length) && reg.test(s)
};