"use strict";
/**剑指 Offer 28. 对称的二叉树
 * 2020年11月14日   约10分钟
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
Object.defineProperty(exports, "__esModule", { value: true });
function isSymmetric(root) {
    if (!root)
        return true;
    let func = function (leftNode, rightNode) {
        if (!leftNode && !rightNode)
            return true;
        if (!leftNode || !rightNode)
            return false;
        if (leftNode.val != rightNode.val) {
            return false;
        }
        return func(leftNode.left, rightNode.right) && func(leftNode.right, rightNode.left);
    };
    return func(root.left, root.right);
}
;
