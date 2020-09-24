"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 53. 最大子序和
 * 2020年9月24日
 *
 * @param nums
 */
function maxSubArray(nums) {
    //1.暴力解法
    if (!nums || nums.length == 0)
        return 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            max = Math.max(max, sum);
        }
    }
    return max;
}
exports.maxSubArray = maxSubArray;
;
