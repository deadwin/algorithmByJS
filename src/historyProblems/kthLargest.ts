/**剑指 Offer 54. 二叉搜索树的第 k 大节点
 * 2020年11月28日
 * 有空重做。
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

import { TreeNode } from "../problems/TreeNode";

function kthLargest(root: TreeNode | null, k: number): number {
    if (!root) return null;
    let ans = null;
    function dfs(node: TreeNode | null) {
        if (node.right) {
            dfs(node.right);
        }
        k--;
        if (k == 0) {
            ans = node.val;
        }
        if (node.left) {
            dfs(node.left);
        }
    }
    dfs(root);
    return ans;
};