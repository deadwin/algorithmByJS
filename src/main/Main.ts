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

function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    let leftD = maxDepth(root.left) + 1;
    let rigthD = maxDepth(root.right) + 1;
    return rigthD > leftD ? rigthD : leftD;
};