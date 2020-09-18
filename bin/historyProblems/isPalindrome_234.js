/**234. 回文链表
 * 2020年9月18日
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
var isPalindrome_234 = function (head) {
    //解法1，借用数组
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
    // 进阶：
    // 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
    //TODO  解法2 双指针 
};
