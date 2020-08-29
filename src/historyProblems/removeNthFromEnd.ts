/**19. 删除链表的倒数第N个节点
 * 2020年8月29日
 * 个人思路：采取双指针，一次遍历
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export var removeNthFromEnd = function(head:ListNode, n:number):ListNode {
    let len = 0;
    let left = head;
    let right = head;
    while(right.next){
        right = right.next;
        if(len < n){
            len ++;
        }else{
            left = left.next;
        }
    }
    if(len < n){
        head = left.next;
    }else if(left.next){
        left.next = left.next.next;
    }
    return head;
};