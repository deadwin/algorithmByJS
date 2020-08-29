/**237. 删除链表中的节点
 * 2020年8月29日
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/

class ListNode{
    public val:any;
    public next:ListNode;
}
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node:ListNode):void {
    node.val = node.next.val;
    node.next = node.next.next;
};