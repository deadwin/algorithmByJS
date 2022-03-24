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

import { TreeNode } from "../problems/TreeNode";

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    let func = function (leftNode: TreeNode, rightNode: TreeNode) {
        if (!leftNode && !rightNode) return true;
        if (!leftNode || !rightNode) return false;
        if (leftNode.val != rightNode.val) {
            return false;
        }
        return func(leftNode.left, rightNode.right) && func(leftNode.right, rightNode.left);
    }
    return func(root.left, root.right);
};