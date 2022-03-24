/**108. 将有序数组转换为二叉搜索树
 * 2020年9月19日
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { TreeNode } from "../problems/TreeNode";


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export var sortedArrayToBST = function (nums: Array<number>): TreeNode {
    function bfs(nums: Array<number>, start: number, end: number): TreeNode {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode();
        node.val = nums[mid];
        node.left = bfs(nums, start, mid - 1);
        node.right = bfs(nums, mid + 1, end);
        return node;
    }
    return bfs(nums, 0, nums.length - 1);
};