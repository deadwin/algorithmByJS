"use strict";
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
function lowestCommonAncestor(root, p, q) {
    let ansNode = null;
    function dfs(node) {
        if (!node)
            return false;
        let ansLeft = dfs(node.left);
        let ansRight = dfs(node.right);
        if (node.val == p || node.val == q) {
            if (ansLeft || ansRight) {
                ansNode = node;
                return false;
            }
            else {
                return true;
            }
        }
        else if (!ansNode) {
            if (ansRight && ansLeft) {
                ansNode = node;
            }
        }
        return ansRight || ansLeft;
    }
    dfs(root);
    return ansNode;
}
;
