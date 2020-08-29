"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeNthFromEnd_1 = require("../historyProblems/removeNthFromEnd");
let node = {
    val: 1,
    next: null
    // next : {
    //     val : 2,
    //     next: {
    //         val : 3,
    //         next : null
    //     }
    // }
};
console.log(removeNthFromEnd_1.removeNthFromEnd(node, 1));
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
