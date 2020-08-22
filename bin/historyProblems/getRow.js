"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**119. 杨辉三角 II
 * 2020年8月23日
 * @param {number} rowIndex
 * @return {number[]}
 */
exports.getRow = function (rowIndex) {
    let len = rowIndex + 1;
    let dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = 1;
        for (let j = i - 1; j > 0; j--) {
            dp[j] = dp[j - 1] + dp[j];
        }
    }
    return dp;
};
//     1 4 6 4 1           5
//    1 5 10 10 5 1        6    (+5)
//   1 6 15 20 15  6  1      7   (+9,+5)
//  1 7 21 35 35 21 7 1     8   (+14,+14)
// 1 8 28 56 70 56 28 8 1    9  (+20,+28,+14)
/**
 *
 *
 *
 *
 */ 
