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
exports.maxDepth = void 0;
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null)
        return 0;
    let leftDepth = (0, exports.maxDepth)(root.left) + 1;
    let rightDepth = (0, exports.maxDepth)(root.right) + 1;
    return leftDepth > rightDepth ? leftDepth : rightDepth;
};
exports.maxDepth = maxDepth;
