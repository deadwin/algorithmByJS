/**100. 相同的树  2022年3月25日
 * @see https://leetcode-cn.com/problems/same-tree/
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (p && q) {
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else {
        return false;
    }
};