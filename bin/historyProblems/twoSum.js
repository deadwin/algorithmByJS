"use strict";
/**167. 两数之和 II - 输入有序数组
 * 2020年8月19日
 *
 *2层遍历，不是最优解，有空可以去看看双指针解法
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let num1 = numbers[i];
        let temp = target - num1;
        if (temp < 0) {
            break;
        }
        for (let j = i + 1; j < numbers.length; j++) {
            if (temp < numbers[j]) {
                break;
            }
            else if (temp == numbers[j]) {
                return [i + 1, j + 1];
            }
        }
    }
};
