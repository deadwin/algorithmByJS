
/**剑指 Offer 03. 数组中重复的数字 日期
 * 目前空间复杂度是O(N),还可以优化到O(1)
 * @param nums 
 * @returns 
 */
function findRepeatNumber(nums: number[]): number {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return nums[i];
        }
        set.add(nums[i]);
    }
};