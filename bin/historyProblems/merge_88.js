"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge_88 = void 0;
/**88. 合并两个有序数组
 * 2020年9月23日
 Do not return anything, modify nums1 in-place instead.
 */
function merge_88(nums1, m, nums2, n) {
    nums2.slice(n);
    nums1.splice(m);
    Array.prototype.push.apply(nums1, nums2);
    nums1.sort((a, b) => {
        if (a < b)
            return -1;
        else if (a == b)
            return 0;
        else
            return 1;
    });
}
exports.merge_88 = merge_88;
;
