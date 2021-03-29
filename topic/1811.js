/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function (command, obstacles, x, y) {
    let start = [0, 0]
    let isEnd = false
    let bomb = false
    let outer = false
    let newCommand = command.split('').map(item => {
        switch (item) {
            case 'U':
                return [0, 1]
            case 'R':
                return [1, 0]
            default:
                return
        }
    })
    while (!isEnd && !bomb && !outer) {
        newCommand.find(item => {
            start[0] += item[0]
            start[1] += item[1]
            bomb = obstacles.find(pos => pos[0] === start[0] && pos[1] === start[1]) ? true : false
            outer = start[0] > x || start[1] > y
            isEnd = start[0] === x && start[1] === y
            return isEnd || bomb || outer
        })
    }
    return isEnd ? true : false
};

console.log(robot("URR", [[4, 2]], 3, 2))