"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayPairSum = void 0;
/**
 * 561. 数组拆分 I
 * 2020年8月18日
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};
exports.arrayPairSum = arrayPairSum;
