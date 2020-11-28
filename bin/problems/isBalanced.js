"use strict";
/**
 *
 */
/**
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
function isBalanced(root) {
    if (!root)
        return true;
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (Math.abs(left - right) > 1)
        return false;
    return isBalanced(root.left) && isBalanced(root.right);
}
;
function dfs(node) {
    if (!node)
        return 0;
    return Math.max(dfs(node.left), dfs(node.right)) + 1;
}
