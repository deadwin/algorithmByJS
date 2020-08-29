import { myAtoi } from "../historyProblems/myAtoi";
import { countAndSay } from "../historyProblems/countAndSay";
import { removeNthFromEnd } from "../historyProblems/removeNthFromEnd";
import { reverseList, reverseList_2 } from "../problems/reverseList";

let node:ListNode = {
    val : 1,
    next : {
        val : 2,
        next: {
            val : 3,
            next : null
        }
    }
}
console.log(reverseList_2(node))













// console.log(Number("11311123113112211"))
// console.log(Number(1311123113112212) + Number(10000000000000000))
// console.log(countAndSay(2));
//1
//11
//21
//1211
//111221

// 10000000000000000
//  1311123113112211
// 11311123113112211
// 11311123113112212