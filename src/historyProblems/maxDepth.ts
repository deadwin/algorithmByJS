/**104. 二叉树的最大深度
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { TreeNode } from "../problems/TreeNode";


/**
 * @param {TreeNode} root
 * @return {number}
 */
export var maxDepth = function (root: TreeNode) {
    if (root == null) return 0;
    let leftDepth = maxDepth(root.left) + 1;
    let rightDepth = maxDepth(root.right) + 1;
    return leftDepth > rightDepth ? leftDepth : rightDepth;
};