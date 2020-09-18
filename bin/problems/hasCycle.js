/**141. 环形链表
 * 2020年9月19日
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    //解法1，哈希表 时间O(n) ,空间O(n) 
    // let set:Set<ListNode> = new Set();
    // while(head){
    //     if(set.has(head)){
    //         return true;
    //     }
    //     set.add(head);
    //     head = head.next;
    // }
    // return false;
    //解法2 双指针 时间O(n) 空间O(1)
    if (head == null || head.next == null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
