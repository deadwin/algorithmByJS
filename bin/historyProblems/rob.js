"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rob = void 0;
/**198. 打家劫舍
 * 2020年9月25日
 * @param nums
 */
function rob(nums) {
    //ans = max<0<=i<=n-1>(f(i))
    //f(i) = max(f(i - 1),nums[i] + f(i - 2))
    /**
     *   4  1   1   4
     *
     */
    if (!nums || nums.length == 0)
        return 0;
    if (nums.length == 1)
        return nums[0];
    let arr = new Array(nums.length);
    arr[0] = nums[0];
    //arr[1]的取值非常重要！ arr[1]的值不是简单的num[1],而是取较大的一个
    arr[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        arr[i] = Math.max(arr[i - 1], nums[i] + arr[i - 2]);
    }
    return arr[arr.length - 1];
}
exports.rob = rob;
;
