"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.threeSum = void 0;
/**5. 三数之和
 * 2022年2月10日
 * 非最优解
 */
function threeSum(nums) {
    if (!nums || nums.length < 3)
        return [];
    let ret = [];
    function check(n_arr) {
        for (let i = 0; i < ret.length; i++) {
            let arr = ret[i];
            if (n_arr[0] == arr[0] && n_arr[1] == arr[1] && n_arr[2] == arr[2]) {
                return false;
            }
        }
        return true;
    }
    let map = new Map();
    map.set(nums[0], 0);
    for (let i = 1; i < nums.length - 1; i++) {
        let num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j];
            let remain = 0 - num1 - num2;
            let has = map.has(remain);
            if (has) {
                let ans = [num1, num2, remain];
                ans.sort((a, b) => {
                    return a - b;
                });
                if (check(ans)) {
                    ret.push(ans);
                }
            }
        }
        map.set(num1, i);
    }
    return ret;
}
exports.threeSum = threeSum;
;
