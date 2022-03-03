"use strict";
/**1122. 数组的相对排序
 * 2020年11月14日
 * 给你两个数组，arr1 和 arr2，

    arr2 中的元素各不相同
    arr2 中的每个元素都出现在 arr1 中

对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 * @param arr1
 * @param arr2
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.relativeSortArray = void 0;
function relativeSortArray(arr1, arr2) {
    let map = new Map();
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i);
    }
    /**   5 0
     *    3 1
     *    4 2
     */
    let ansMap = new Map();
    let tailArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            let posIndex = map.get(arr1[i]);
            if (ansMap.has(posIndex)) {
                let arr = ansMap.get(posIndex);
                arr.push(arr1[i]);
            }
            else {
                ansMap.set(posIndex, [arr1[i]]);
            }
        }
        else {
            tailArr.push(arr1[i]);
        }
    }
    tailArr.sort((a, b) => {
        return a - b;
    });
    let ansArr = [];
    for (let i = 0; i < arr2.length; i++) {
        let arr = ansMap.get(i);
        ansArr.push(...arr);
    }
    ansArr.push(...tailArr);
    return ansArr;
}
exports.relativeSortArray = relativeSortArray;
;
// console.log(relativeSortArray(
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
//         1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
//     ,
//     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
//     ))
