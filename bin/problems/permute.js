"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permute = void 0;
/**46. 全排列  2022年3月25日
 * 采用了剪枝：数字不重复的情况下，每用掉一个数字，就从剩余队列里删掉该数字，然后使用递归
 * @param nums
 * @returns
 */
function permute(nums) {
    let set = [];
    function exe(num1, num2) {
        if (num2.length == 0) {
            set.push(num1);
        }
        for (let i = 0; i < num2.length; i++) {
            let n = num2[i];
            let newn1 = [n].concat(num1);
            let arr = [].concat(num2);
            arr.splice(i, 1);
            exe(newn1, arr);
        }
    }
    exe([], nums);
    return set;
}
exports.permute = permute;
;
