"use strict";
/**剑指 Offer 07. 重建二叉树
 * 2020年11月29日
 *
 */
/**
 *
 * @param preorder
 * @param inorder
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = require("../problems/TreeNode");
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder || preorder.length == 0)
        return null;
    let treeNode = new TreeNode_1.TreeNode();
    treeNode.val = preorder[0];
    for (let i = 0; i < preorder.length; i++) {
        if (preorder[0] == inorder[i]) {
            treeNode.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
            treeNode.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
        }
    }
    return treeNode;
};
