"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.massage = void 0;
/**面试题 17.16. 按摩师
 * @param {number[]} nums
 * @return {number}
 */
function massage(nums) {
    //解法1
    let dp0 = 0;
    let dp1 = 0;
    for (let i = 0; i < nums.length; i++) {
        let temp = dp1;
        dp1 = Math.max(dp0 + nums[i], dp1);
        dp0 = temp;
    }
    return dp1;
    //解法2
    // if(!nums || nums.length == 0) return 0;
    // let len = nums.length;
    // let dp0 = 0;
    // let dp1 = nums[0];
    // for(let i = 1;i < len;i ++){
    //     let tdp0 = Math.max(dp0,dp1);
    //     let tdp1 = dp0 + nums[i];
    //     dp0 = tdp0;
    //     dp1 = tdp1;
    // }
    // return Math.max(dp0,dp1);
}
exports.massage = massage;
;
