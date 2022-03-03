"use strict";
/**102. 二叉树的层序遍历
 * 复习 2020年9月23日
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
exports.levelOrder = void 0;
function levelOrder(root) {
    if (!root)
        return [];
    let ans = [];
    let treeNodeArr = [];
    treeNodeArr.push(root);
    let len = treeNodeArr.length;
    let tempAnsArr = [];
    while (len > 0 || treeNodeArr.length > 0) {
        let curTreeNode = treeNodeArr.shift();
        len--;
        tempAnsArr.push(curTreeNode.val);
        if (curTreeNode.left) {
            treeNodeArr.push(curTreeNode.left);
        }
        if (curTreeNode.right) {
            treeNodeArr.push(curTreeNode.right);
        }
        if (len == 0) {
            ans.push(tempAnsArr);
            tempAnsArr = [];
            len = treeNodeArr.length;
        }
    }
    return ans;
}
exports.levelOrder = levelOrder;
;
