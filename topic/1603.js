/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.arr = [big, medium, small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    let empty = !(this.arr[carType - 1] === 0)
    if (empty) this.arr[carType - 1] = this.arr[carType - 1] - 1
    return empty
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1);
parkingSystem.addCar(2);
parkingSystem.addCar(3);
parkingSystem.addCar(1);