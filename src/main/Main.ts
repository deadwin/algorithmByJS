import { longestPalindrome } from "../historyProblems/5.最长回文子串"
import { reverseWords } from "../historyProblems/reverseWords"



// // console.log(longestPalindrome
// //     (str));
// console.log(str.length)


// let arr = [45,100,25,10];

//  f(n) = Math.min(f(n - item[0]) + 1,f(n - item[1]) + 1 ..., f(n - item[item.length - 1]) + 1);

/**
 * 
 *f[i][j] = s[i] == s[j] && f[i + 1][j - 1] == true
 *if(j - i == 0)  f[i][j] = true;
  else if(j - i == 1) f[i][j] = s[i] == s[j]
 * 
 **/

reverseWords("a good   example")


// console.log(str.sl);
// let arr = [1,2,3];
// console.log(str.splice(1,1))