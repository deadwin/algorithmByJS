"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**485. 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
exports.findMaxConsecutiveOnes = function (nums) {
    let maxLen = 0;
    let curLen = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            maxLen = Math.max(curLen, maxLen);
            curLen = 0;
        }
        else {
            curLen++;
        }
    }
    return Math.max(curLen, maxLen);
};
