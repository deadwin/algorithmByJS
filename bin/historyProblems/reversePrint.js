"use strict";
/**剑指 Offer 06. 从尾到头打印链表
 * 2020年9月30日
 * 1居然几分钟内写出了递归！哈哈
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
function reversePrint(head) {
    if (head == null)
        return [];
    let arr = reversePrint(head.next);
    arr.push(head.val);
    return arr;
}
exports.reversePrint = reversePrint;
;
