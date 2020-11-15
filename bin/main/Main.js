"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 12点00分 12点14分
 * @param root
 * @param sum
 */
function pathSum(root, sum) {
    let ansArr = [];
    if (!root)
        return ansArr;
    let getAns = function (node, sum, arr) {
        sum -= node.val;
        arr.push(node.val);
        if (!node.left && !node.right) {
            if (sum == 0) {
                ansArr.push(arr);
            }
            return;
        }
        if (node.left) {
            let newArr = [];
            newArr.push(...arr);
            getAns(node.left, sum, newArr);
        }
        if (node.right) {
            let newArr = [];
            newArr.push(...arr);
            getAns(node.right, sum, newArr);
        }
    };
    getAns(root, sum, []);
    return ansArr;
}
;
