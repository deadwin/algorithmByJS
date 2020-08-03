"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**70. 爬楼梯
 * @param {number} n
 * @return {number}
 */
exports.climbStairs = function (n) {
    let dp0 = 1;
    let dp1 = 2;
    let dpArr = new Array(n + 1);
    dpArr[0] = dp0;
    dpArr[1] = dp1;
    for (let i = 2; i < n; i++) {
        dpArr[i] = dpArr[i - 2] + dpArr[i - 1];
    }
    return dpArr[n - 1];
};
