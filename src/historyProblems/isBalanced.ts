/**剑指 Offer 55 - II. 平衡二叉树
 * 2020年11月28日
 * 需要复习
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

import { TreeNode } from "../problems/isSameTree";

function isBalanced(root: TreeNode | null): boolean {
    if(!root) return true;
    let left = dfs(root.left);
    let right = dfs(root.right);
    if(Math.abs(left - right) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};
function dfs(node){
    if(!node) return 0;
    return Math.max(dfs(node.left), dfs(node.right)) + 1;
}