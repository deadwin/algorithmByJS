"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pivotIndex = void 0;
//724. 寻找数组的中心索引
function pivotIndex(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let rightSum = sum - leftSum - nums[i];
        if (leftSum == rightSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}
exports.pivotIndex = pivotIndex;
;
