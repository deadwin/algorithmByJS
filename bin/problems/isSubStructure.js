"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**剑指 Offer 26. 树的子结构
 * 2020年11月14日 11点47分  12点09分
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function isSubStructure(A, B) {
    if (!B)
        return false;
    let isSame = function (nodeA, nodeB) {
        if (!nodeA && !nodeB)
            return true;
        if (nodeA && !nodeB)
            return true;
        if (!nodeA && nodeB)
            return false;
        if (nodeA.val == nodeB.val) {
            return isSame(nodeA.left, nodeB.left) && isSame(nodeA.right, nodeB.right);
        }
    };
    let node;
    let arr = [];
    arr.push(A);
    while (arr.length > 0) {
        node = arr.shift();
        if (node.val == B.val && isSame(node, B)) {
            return true;
        }
        else {
            if (node.left) {
                arr.push(node.left);
            }
            if (node.right) {
                arr.push(node.right);
            }
        }
    }
    return false;
}
exports.isSubStructure = isSubStructure;
;
