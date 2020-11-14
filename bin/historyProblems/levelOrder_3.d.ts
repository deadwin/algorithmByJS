/**剑指 Offer 32 - III. 从上到下打印二叉树 III
 * 2020年11月15日 01点59分  02点29分
 * 注意本解法需要保证每一行的插入顺序是从左到右，所以需要做倒序操作
 * 层序遍历 + 倒序
 *
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
export declare function levelOrder_3(root: TreeNode | null): number[][];
