"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**153. 寻找旋转排序数组中的最小值
 * 2020年8月23日
 *
 *
 * 测试用例:
 *  // console.log(findMin([7]));
    // console.log(findMin([7,0]));
    // console.log(findMin([7,8]));
    // console.log(findMin([7,8,9]));
    // console.log(findMin([7,8,9,0]));
    
    // console.log(findMin([7,8,9,0,1]));
    // console.log(findMin([7,8,9,0,1,2]));
    // console.log(findMin([7,8,9,0,1,2,3]));
    // console.log(findMin([7,8,9,0,1,2,3,4,5,6]));
 *
 *
 *
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
exports.findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        //nums[0]   nums[nums.length - 1]     nums[mid]    nums[left]
        //TODO 此处还可以优化下减少代码量，但是思想基本一致
        if (nums[mid] < nums[left]) {
            if (nums[mid] < nums[0]) {
                right = mid;
            }
        }
        else if (nums[mid] >= nums[left]) {
            if (nums[mid] > nums[nums.length - 1]) {
                left = mid + 1;
            }
            else {
                if (nums[mid] == nums[left]) {
                    return nums[left];
                }
                right = mid - 1;
            }
        }
    }
    return nums[left];
};
