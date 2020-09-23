"use strict";
/**104. 二叉树的最大深度
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @return {number}
 */
exports.maxDepth = function (root) {
    if (root == null)
        return 0;
    let leftDepth = exports.maxDepth(root.left) + 1;
    let rightDepth = exports.maxDepth(root.right) + 1;
    return leftDepth > rightDepth ? leftDepth : rightDepth;
};
