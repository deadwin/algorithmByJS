/**328. 奇偶链表
 * 2020年11月14日
  Definition for singly-linked list.
 */
declare class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null);
}
export declare function oddEvenList(head: ListNode | null): ListNode | null;
export {};
/**
 *       1->2->3->4->5
 *       s 1 -> 3->5   f = 5
 *       d  2 -> 4   f = 4
 *       dh  2
 *       p  5
 *
 *
 */ 
