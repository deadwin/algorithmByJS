"use strict";
//35. 搜索插入位置
Object.defineProperty(exports, "__esModule", { value: true });
function searchInsert(nums, target) {
    if (target < nums[0]) {
        return 0;
    }
    else if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    let min = 0;
    let max = nums.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let midNum = nums[mid];
        if (midNum < target) {
            min = mid + 1;
        }
        else if (midNum > target) {
            max = mid - 1;
        }
        else {
            return mid;
        }
    }
    return min;
}
exports.searchInsert = searchInsert;
;
