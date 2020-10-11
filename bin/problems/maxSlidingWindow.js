"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
exports.maxSlidingWindow = function (nums, k) {
    if (!nums || nums.length == 0)
        return [];
    let ansArr = [];
    let flag = 0;
    let max = nums[flag];
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        console.log(i - flag, "len", i);
        if (i - flag >= k) {
            max = nums[i];
            while (flag < i) {
                flag++;
                if (max < nums[flag]) {
                    console.log(max, "max", flag, i);
                    max = nums[flag];
                }
            }
        }
        else {
            if (max < cur) {
                max = cur;
                flag = i;
            }
        }
        console.log(i, k - 1, max);
        if (i >= k - 1) {
            ansArr.push(max);
        }
    }
    console.log(ansArr);
    return ansArr;
};
