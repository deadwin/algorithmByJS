"use strict";
/**剑指 Offer 37. 序列化二叉树
 * 2020年11月28日
 * 使用递归来解。
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const TreeNode_1 = require("../problems/TreeNode");
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root == null) {
        return "null";
    }
    let left = serialize(root.left);
    let right = serialize(root.right);
    return root.val + "," + left + "," + right;
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    // let arr =JSON.parse(data);
    let arr = data.split(','); // split成数组
    let preList = function (list) {
        let data = list.shift();
        if (data == "null") {
            return null;
        }
        let node = new TreeNode_1.TreeNode();
        node.val = data;
        node.left = preList(list);
        node.right = preList(list);
        return node;
    };
    return preList(arr);
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */ 
