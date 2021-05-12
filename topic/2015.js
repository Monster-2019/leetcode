/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
    let add = (count) => {
        if (count === 1) {
            return B
        }

        return B + add(count - 1)
    }
    return add(A)
};

console.log(multiply(3, 4))