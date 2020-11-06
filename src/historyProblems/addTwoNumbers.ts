/**2. 两数相加
 * 2020年11月6日
 * 居然写出了官方解法！
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

let listNode1 = new ListNode();
let listNode2 = new ListNode();
let listNode3 = new ListNode();
listNode1.val = 9;
listNode2.val = 9;
listNode3.val = 9;
listNode1.next = listNode2;
listNode2.next = listNode3;

let listNode11 = new ListNode();
let listNode21 = new ListNode();
let listNode31 = new ListNode();
let listNode41 = new ListNode();

listNode11.val = 9;
listNode21.val = 9;
listNode31.val = 9;
listNode41.val = 9;
listNode11.next = listNode21;
listNode21.next = listNode31;
listNode31.next = listNode41;

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let num1 = 0;
    let num2 = 0;
    let newList = new ListNode();
    let flag = newList;
    let val = 0;
    while(l1 || l2){
        newList.next = new ListNode();
        newList = newList.next;
        num1 = l1 ? l1.val : 0;
        num2 = l2 ? l2.val : 0;
        newList.val = num1 + num2 + val;
        if(newList.val >= 10){
            val = Math.floor(newList.val / 10);
            newList.val = newList.val % 10;
        }else{
            val = 0;
        }
        if(l1 || l2){
            if(l1){
                l1 = l1.next;
            }
            if(l2){
                l2 = l2.next;
            }
        }
    }
    if(val > 0){
        newList.next = new ListNode();
        newList.next.val = val;
    }
    return flag.next;
};
// console.log(Math.floor(18 / 10),18 % 10)
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