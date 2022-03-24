/**113. 路径总和 II   剑指 Offer 34. 二叉树中和为某一值的路径
 * 2020年9月26日  第二遍2020年11月15日 12点00分 12点14分
 * DFS 解法
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
import { TreeNode } from "../problems/TreeNode";
export declare function pathSum(root: TreeNode | null, sum: number): number[][];
