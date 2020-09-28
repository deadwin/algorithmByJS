"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Node} root
 * @return {Node}
 */
exports.connect = function (root) {
    if (!root)
        return root;
    let arr = [];
    arr.push(root);
    let size = arr.length;
    let cur;
    let tempArr = [];
    while (size > 0) {
        cur = arr.shift();
        size--;
        tempArr.push(cur);
        if (cur.left) {
            arr.push(cur.left);
        }
        if (cur.right) {
            arr.push(cur.right);
        }
        if (size == 0) {
            for (let i = 0; i < tempArr.length - 1; i++) {
                tempArr[i].next = tempArr[i + 1];
            }
            tempArr[tempArr.length - 1].next = null;
            tempArr = [];
            size = arr.length;
        }
    }
    return root;
};
