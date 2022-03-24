"use strict";
/**108. 将有序数组转换为二叉搜索树
 * 2020年9月19日
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedArrayToBST = void 0;
const TreeNode_1 = require("../problems/TreeNode");
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function bfs(nums, start, end) {
        if (start > end)
            return null;
        let mid = Math.floor((start + end) / 2);
        let node = new TreeNode_1.TreeNode();
        node.val = nums[mid];
        node.left = bfs(nums, start, mid - 1);
        node.right = bfs(nums, mid + 1, end);
        return node;
    }
    return bfs(nums, 0, nums.length - 1);
};
exports.sortedArrayToBST = sortedArrayToBST;
