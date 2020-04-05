"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor() {
        this.val = 0;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**144. 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let result = [];
    if (!root) {
        return result;
    }
    let stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        result.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return result;
};
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = [];
    if (!root) {
        return result;
    }
    let stack = [];
    let node = root;
    while (node || stack.length > 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        }
        else {
            let flag = stack[stack.length - 1];
            stack.pop();
            result.push(flag.val);
            node = flag.right;
        }
    }
    return result;
};



// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var postorderTraversal = function(root) {
//     let result = [];
//     if(!root){
//         return result;
//     }

//     let flag = null;

//     let stack = [];

//     stack.push(root);

//     while(stack.length > 0){
//         let node = stack[stack.length - 1];


//         if(node.right && flag.val != node.right.val){
//             stack.push(node.right);
//         }

//         if(node.left && flag.val != node.left.val){
//             stack.push(node.left);
//         }else{

//         }


//     }


//     return result;
// };