"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import BigNumber from "../bigNumber/bignumber";
let arr = [100, 101, 102, 103, 104];
let max = 104;
let cur = 103;
let size = arr.length;
let begin = cur - (cur + size - max) + 1;
console.log(begin, "be");
for (let j = begin; j < cur; j++) {
    if (arr[j] <= cur) {
        arr[j] = 0;
    }
}
console.log(arr);
// console.log(maximalSquare(
//     [
//         ["1","0"],
//         ["1","0"]
//     ]
//     ))
//     console.log(maximalSquare(
// [
//     ["1","1"],
//     ["1","1"],
//     ["1","1"]
// ]
//         ))
//         console.log(maximalSquare(
// [   ["1","0","1","0","0"],
//     ["1","0","1","1","1"],
//     ["1","1","1","1","1"],
//     ["1","0","0","1","0"]
// ]
//                     ))
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
