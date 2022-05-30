/**237. 删除链表中的节点
 * 2020年8月29日
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
declare var deleteNode: (node: ListNode) => void;
/**剑指 Offer 18. 删除链表的节点 2020年8月29日
 * 采用递归解
 *
 * @param head
 * @param val
 * @returns
 */
declare function deleteNode2(head: ListNode | null, val: number): ListNode | null;
