/**328. 奇偶链表
 * 2020年11月14日
  Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function oddEvenList(head: ListNode | null): ListNode | null {
    if(!head || !head.next){
        return head;
    }
    let pointSingle = head;    
    let doubleHead = head.next;
    let pointDoube = doubleHead;
    let point = head.next;
    let isSingle = false;
    while(point.next){
       isSingle = !isSingle;
       point = point.next;
       if(isSingle){
        pointSingle.next = point;
        pointSingle = point;
       }else{
        pointDoube.next = point;
        pointDoube = point;
       }
    }
    //注意要设下next，防止next循环引用
    pointDoube.next = null;
    pointSingle.next = doubleHead;
    return head;
};
/**
 *       1->2->3->4->5
 *       s 1 -> 3->5   f = 5
 *       d  2 -> 4   f = 4 
 *       dh  2
 *       p  5
 * 
 * 
 */