import { maxSlidingWindow } from "../historyProblems/maxSlidingWindow";
import { intersection } from "../historyProblems/intersection";
import { translateNum } from "../historyProblems/translateNum";
import { validMountainArray } from "../historyProblems/validMountainArray";
// import BigNumber from "../bigNumber/bignumber";
console.log(validMountainArray([2,1]))
console.log(validMountainArray([0,3,2,1]))
console.log(validMountainArray([3,5,5]))
console.log(validMountainArray([0,2,3,4,5,2,1,0]))


/**
 * 1 8 8 2 2
 * 1 8 8 22
 * 18 8 22
 * 18 8 2 2
 * 
 * 18 8 2
 * 1 8 8 2
 * 
 * 
 */