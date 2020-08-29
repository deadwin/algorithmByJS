/**237. 删除链表中的节点
 * 2020年8月29日
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/
declare class ListNode {
    val: any;
    next: ListNode;
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
declare var deleteNode: (node: ListNode) => void;
