"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMagicIndex = void 0;
/**面试题 08.03. 魔术索引
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == i) {
            return i;
        }
        else if (nums[i] < i) {
            i = Math.max(nums[i], i);
        }
    }
    return -1;
};
exports.findMagicIndex = findMagicIndex;
