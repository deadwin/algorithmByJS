"use strict";
/**
 * 27. 移除元素
 * @param nums
 * @param val
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElement = void 0;
function removeElement(nums, val) {
    //解法1，本题推荐解法
    let len = nums.length;
    let i = 0;
    for (; i < len; i++) {
        if (nums[i] == val) {
            nums[i] = nums[len - 1];
            i--;
            len--;
        }
    }
    return i;
    //解法2  不推荐
    for (let i = 0; i < nums.length;) {
        if (nums[i] == val) {
            nums.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return nums.length;
}
exports.removeElement = removeElement;
;
