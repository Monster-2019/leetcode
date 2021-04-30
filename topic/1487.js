/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
    let index = 1
    let result = []
    let name = ''

    let isExist = (val) => {
        let value = name || val
        if (!result.includes(value)) {
            result.push(value)
            index = 1
            name = ''
        } else {
            name = val + `(${index})`
            index++
            isExist(val)
        }
    }

    for (let name of names) {
        isExist(name)
    }

    return result
};

console.log(getFolderNames(["gta", "gta(1)", "gta", "avalon"]))

// 超时