/**剑指 Offer 35. 复杂链表的复制
 * 2020年11月29日
 * @param head
 */
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head)
        return head;
    let newHead = copyNode(head);
    let newCur = newHead;
    let cur = head.next;
    let map = new Map();
    map.set(head, newCur);
    while (cur) {
        newCur.next = copyNode(cur);
        newCur = newCur.next;
        map.set(cur, newCur);
        cur = cur.next;
    }
    cur = head;
    newCur = newHead;
    while (cur) {
        if (cur.random) {
            newCur.random = map.get(cur.random);
        }
        cur = cur.next;
        newCur = newCur.next;
    }
    return newHead;
};
function copyNode(node) {
    let ans = new Node();
    ans.val = node.val;
    return ans;
}
