/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
export interface Node {
    val: any;
    left: Node;
    right: Node;
    next: Node;
}
/**
 * @param {Node} root
 * @return {Node}
 */
export declare var connect: (root: Node) => Node;
