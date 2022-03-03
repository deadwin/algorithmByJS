"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myPow = void 0;
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        return 1 / (0, exports.myPow)(x, -n);
    }
    if (n == 0) {
        return 1;
    }
    if (n & 1) {
        return x * (0, exports.myPow)(x, n - 1);
    }
    return (0, exports.myPow)(x * x, n / 2);
};
exports.myPow = myPow;
// 2,5 - 4,3,->16->2
