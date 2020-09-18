"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**21. 合并两个有序链表
 * 2020年9月18日
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
exports.mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    }
    else if (!l2) {
        return l1;
    }
    let ansList = null;
    let left1 = l1;
    let left2 = l2;
    if (l1.val < l2.val) {
        ansList = l1;
        left1 = l1.next;
    }
    else {
        ansList = l2;
        left2 = l2.next;
    }
    let flagList = ansList;
    while (left1 && left2) {
        if (left1.val < left2.val) {
            flagList.next = left1;
            left1 = left1.next;
        }
        else {
            flagList.next = left2;
            left2 = left2.next;
        }
        flagList = flagList.next;
    }
    flagList.next = left1 ? left1 : left2;
    return ansList;
};
