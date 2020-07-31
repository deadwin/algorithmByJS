"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**5. 最长回文子串
 * @param {string} s
 * @return {string}
 */
exports.longestPalindrome = function (s) {
    if (s.length == 0)
        return "";
};
//暴力解法，错误解法
// /**5. 最长回文子串
//  * @param {string} s 
//  * @return {string}
//  */
// export var longestPalindrome = function(s:string) {
//     if(s.length == 0) return "";
//     let result = "";
//     let front = "";
//     let last = "";
//     // let i = 0;
//     const func = (startIndex,endIndex) =>{
//             console.log(startIndex,s[startIndex],"|||",endIndex,s[endIndex])
//             // i ++;
//             // if(i >= 20){
//             //     return;
//             // }
//             if(s[startIndex] == s[endIndex]){
//                 front += s[startIndex];
//                 if(startIndex != endIndex){
//                     last = s[endIndex] + last;
//                 }
//                 //"aacdefcaa"  abacab
//                 // console.log(front,last,startIndex,endIndex,"匹配成功")
//                 if(startIndex >= (endIndex - 1)){
//                     if(front.length + last.length > result.length){
//                         result = front + last;
//                     }
//                     let frontLen = front.length;
//                     front = "";
//                     last = "";
//                     let len = s.length - 1 - result.length;
//                     let newStartIndex = startIndex - frontLen + 1 + frontLen * 2;
//                     if(newStartIndex <= len){
//                         func(newStartIndex + 1,s.length - 1);
//                     }
//                 }else{
//                     func(startIndex + 1,endIndex - 1);
//                 }
//             }else{
//                 startIndex -= front.length;
//                 let curEndIndex = endIndex + front.length - 1;
//                 front = "";
//                 last = "";
//                 if(curEndIndex >= startIndex){
//                     func(startIndex,curEndIndex);
//                 }
//             }
//     }
//     func(0,s.length - 1);
//     // console.log(result,"result");
//     return result;
// };
