"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**剑指 Offer 36. 二叉搜索树与双向链表
 * 2020年11月16日
 * 思路：实际上用了递归中序遍历
 */
class Node {
}
/**
 *
 *         2
        1     4
            3   5
    *
    */
let node = new Node();
node.val = 2;
node.left = new Node();
node.left.val = 1;
node.right = new Node();
node.right.val = 4;
node.right.left = new Node();
node.right.left.val = 3;
node.right.right = new Node();
node.right.right.val = 5;
/**
 *
 * @param root
 */
exports.treeToDoublyList = function (root) {
    if (!root)
        return root;
    let flag = null;
    let head = new Node();
    let midIter = function (node) {
        let left = node.left;
        let right = node.right;
        if (left) {
            midIter(left);
        }
        if (!flag) {
            flag = node; //flag = 1,  head.rigth = 1
            head.right = flag;
        }
        else {
            node.left = flag; //node = 2, 2.left = 1  ,1.right = 2,1=2
            flag.right = node;
            flag = flag.right;
        }
        if (right) {
            midIter(right);
        }
        // return node;
    };
    midIter(root);
    head.right.left = flag;
    flag.right = head.right;
    head = head.right;
    return head;
};
