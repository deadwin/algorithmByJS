/**98. 验证二叉搜索树
 * 2020年9月22日
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { TreeNode } from "../problems/TreeNode";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root: TreeNode): boolean {
   let helper = (root: TreeNode, lower: number, upper: number) => {
      if (root == null) return true;
      if (root.val <= lower || root.val >= upper) return false;
      return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
   }
   return helper(root, -Infinity, Infinity);
};