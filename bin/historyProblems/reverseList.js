"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseList_2 = exports.reverseList = void 0;
/**206. 反转链表
 * 2020年8月29日
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 迭代解法：比较简单
 */
var reverseList = function (head) {
    // 1->2->3
    //cur = 1,cur.next = null
    //cur = 2 cur.next = 1
    //cur = 3 cur.next = 2
    let cur = head;
    if (!cur || !cur.next)
        return cur;
    let next = cur.next;
    cur.next = null;
    while (next) {
        let temp = next.next;
        next.next = cur;
        cur = next;
        next = temp;
    }
    return cur;
};
exports.reverseList = reverseList;
/**递归解：略难
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList_2 = function (head) {
    if (!head || !head.next)
        return head;
    let p = (0, exports.reverseList_2)(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};
exports.reverseList_2 = reverseList_2;
