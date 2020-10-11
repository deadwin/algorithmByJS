"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**剑指 Offer 59 - I. 滑动窗口的最大值
 * 2020年10月12日
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
exports.maxSlidingWindow = function (nums, k) {
    if (!nums || nums.length == 0)
        return [];
    let ansArr = [];
    let flag = 0;
    let index = flag;
    for (let i = 0; i < nums.length; i++) {
        if (i - flag > k - 1) {
            index = flag + 1;
            while (flag < i) {
                flag++;
                if (nums[index] < nums[flag]) {
                    index = flag;
                }
            }
            flag = index;
        }
        else {
            if (nums[index] < nums[i]) {
                index = i;
            }
        }
        if (i >= k - 1) {
            ansArr.push(nums[index]);
        }
    }
    // console.log(ansArr);
    return ansArr;
};
