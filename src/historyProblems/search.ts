/**704. 二分查找        2022年3月31日
 * 
 * @param nums 
 * @param target 
 * @returns 
 */
export function search(nums: number[], target: number): number {
    // return _serach1(0, nums.length, nums, target);
    return _serach2(nums, target);
};
function _serach1(min, max, nums, target) {
    if (min > max) return -1;
    let mid = Math.floor((min + max) / 2);
    if (nums[mid] == target) {
        return mid;
    } else if (nums[mid] < target) {
        return _serach1(mid + 1, max, nums, target);
    } else {
        return _serach1(min, mid - 1, nums, target);
    }
}

function _serach2(nums: number[], target: number) {
    let min = 0;
    let max = nums.length;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return -1;
}