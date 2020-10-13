import { maxSlidingWindow } from "../historyProblems/maxSlidingWindow";
// import BigNumber from "../bigNumber/bignumber";


// fourSum([-3,-2,-1,0,0,1,2,3],0);
let nums = [3,2,1,0],k = 4
maxSlidingWindow(nums,k)




/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums:number[]):number {
    //f(0) = 0, f(1) = 1
    //f(n) = max(f(n - 1) + n,f(n - 1))
    if(!nums || nums.length == 0) return 0;
    let arr = new Array(nums.length);
    arr[0] = nums[0];
    let ans = arr[0];
    for(let i = 1; i < nums.length;i ++){
        arr[i] = Math.max(arr[i - 1] + nums[i], nums[i]);
        ans = Math.max(arr[i],ans);
    }
    return ans;
};




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