/**2. 两数相加
 * 2020年11月6日
 * 居然写出了官方解法！
 */
declare class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null);
}
export declare function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null;
export {};
/**
 *  2 4 3 1
 *  1 2 3
 * ---------
 *  3 6 6 1
 *
 *    3 4 2
 *    5 7 4
 * ---------
 *    8 1 7
 *
 *  9 9 9
 *  9 9
 *  8 9 0 1
 */ 
