/**235. 二叉搜索树的最近公共祖先
 * 2020年11月29日
 * 注意本解法没看到是二叉搜索树，所以使用了普通的递归解法。
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

function lowestCommonAncestor(root: TreeNode | null, p: number, q: number): TreeNode | null {
    let ansNode = null;
    function dfs(node: TreeNode | null) {
        if (!node) return false;
        let ansLeft = dfs(node.left);
        let ansRight = dfs(node.right);
        if (node.val == p || node.val == q) {
            if (ansLeft || ansRight) {
                ansNode = node;
                return false;
            } else {
                return true;
            }
        } else if (!ansNode) {
            if (ansRight && ansLeft) {
                ansNode = node;
            }
        }
        return ansRight || ansLeft;
    }
    dfs(root);
    return ansNode;
};