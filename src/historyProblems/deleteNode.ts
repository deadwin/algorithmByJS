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
var deleteNode = function (node: ListNode): void {
    node.val = node.next.val;
    node.next = node.next.next;
};

/**剑指 Offer 18. 删除链表的节点 2020年8月29日
 * 采用递归解
 * 
 * @param head 
 * @param val 
 * @returns 
 */
function deleteNode2(head: ListNode | null, val: number): ListNode | null {
    function a(list: ListNode, val: number) {
        if (list == null) return;
        if (list.val == val) {
            return list.next ? list.next : null;
        }
        let node = a(list.next, val);
        list.next = node;
        return list;
    }
    return a(head, val);
};