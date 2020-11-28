"use strict";
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
const isSameTree_1 = require("./isSameTree");
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let arr = [];
    arr.push(root);
    let node;
    let len = arr.length;
    let ans = "";
    while (arr.length > 0) {
        node = arr.shift();
        if (node == null) {
            ans += (",null");
        }
        else {
            ans += ("," + node.val);
            if (node.left) {
                arr.push(node.left);
            }
            else {
                arr.push(null);
            }
            if (node.right) {
                arr.push(node.right);
            }
            else {
                arr.push(null);
            }
        }
    }
    if (ans.length > 0) {
        ans = "[" + ans + "]";
    }
    else {
        ans = "[]";
    }
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let arr = JSON.parse(data);
    if (!arr || arr.length == 0)
        return null;
    let node = new isSameTree_1.TreeNode();
    node.val = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == null) {
        }
    }
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */ 
