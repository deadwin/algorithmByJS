/**
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
function sortList(head) {
    if (!head)
        return head;
    let arr = [];
    let node = head;
    while (node) {
        arr.push([node.val, node]);
        node = node.next;
    }
    arr.sort((a, b) => {
        if (a[0] <= b[0]) {
            a[1].next = b[1];
            b[1].next = null;
        }
        else if (a[0] > b[0]) {
            b[1].next = a[1];
        }
        return a[0] - b[0];
    });
    // arr[arr.length - 1][1].next = null;
    return arr[0][1];
}
;
