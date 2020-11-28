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
function maxDepth(root) {
    if (!root)
        return 0;
    let leftD = maxDepth(root.left) + 1;
    let rigthD = maxDepth(root.right) + 1;
    return rigthD > leftD ? rigthD : leftD;
}
;
