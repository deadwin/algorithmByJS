"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minSubArrayLen = void 0;
/**209. 长度最小的子数组
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let ans = nums.length + 1;
    while (end < nums.length) {
        sum += nums[end];
        if (sum < s) {
            end++;
            continue;
        }
        while (sum >= s && start <= end) {
            sum -= nums[start];
            ans = Math.min(ans, end - start + 1);
            start++;
        }
        end++;
    }
    return ans == nums.length + 1 ? 0 : ans;
};
exports.minSubArrayLen = minSubArrayLen;
