"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**70. 爬楼梯
 * 2020年9月23日复习
 * @param {number} n
 * @return {number}
 */
exports.climbStairs = function (n) {
    // let dp0 = 1;
    // let dp1 = 2;
    // let dpArr = new Array<number>(n + 1);
    // dpArr[0] = dp0;
    // dpArr[1] = dp1;
    // for(let i = 2;i < n ;i ++){
    //     dpArr[i] = dpArr[i - 2] + dpArr[i - 1];
    // }
    // return dpArr[n - 1];
    //
    if (n <= 2)
        return n;
    let arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};
