"use strict";
/**98. 验证二叉搜索树
 * 2020年9月22日
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let helper = (root, lower, upper) => {
        if (root == null)
            return true;
        if (root.val <= lower || root.val >= upper)
            return false;
        return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
    };
    return helper(root, -Infinity, Infinity);
};
