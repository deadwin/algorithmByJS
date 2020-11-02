import { maxSlidingWindow } from "../historyProblems/maxSlidingWindow";
import { intersection } from "../historyProblems/intersection";
import { translateNum } from "../historyProblems/translateNum";
// import BigNumber from "../bigNumber/bignumber";
console.log(translateNum(188221))  //4
console.log(translateNum(624))   //2      6 2 4, 6,24,
console.log(translateNum(506))   //1
console.log(translateNum(220))   //3         2 2 0 , 2 20,  22 0      //1 ,2, 3

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