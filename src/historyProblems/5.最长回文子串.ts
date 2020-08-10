
/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */


/**
 * dp[i][j] =  s[i] == s[j] && dp[i + 1][j - 1] == true
 * 
 * 
 * dp[i][i] = true;
 * dp[i][i + 1] = s[i] == s[i + 1];
 * 
 * 
 * 
 */


export function longestPalindrome(s:string):string{
    let dp:Array<Array<boolean>> = new Array(s.length);
    for(let i = 0;i < dp.length;i ++){
        dp[i] = new Array(s.length);
    }
    let ans:string = "";
    for(let len = 0;len < dp.length;len ++){
        for(let i = 0;i + len < dp.length;i ++){
            let j = i + len;
            if(len == 0){
                dp[i][j] = true;
            }else if(len == 1){
                dp[i][j] = (s[i] == s[j]);
            }else {
                dp[i][j] = (s[i] == s[j]) && dp[i + 1][j - 1];
            }
            if(dp[i][j] && len + 1 > ans.length){
                ans = s.substr(i,len + 1);
            }
        }
    }
    return ans;

}







/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
// export function longestPalindrome(s: string): string {
//     let len = s.length;
//     if(len == 0 || len == 1) return s;

//     //s = "abcba";

//     let maxLen = 1;
//     let begin = 0;

//     /**
//      * dp = [
//      *      [u,u,u,u,u],
//      *      [u,u,u,u,u],
//      *      [u,u,u,u,u],
//      *      [u,u,u,u,u],
//      *      [u,u,u,u,u]
//      * ]
//      * 
//      */
//     let dp:Array<Array<boolean>> = new Array(len);

//     for(let i = 0;i < dp.length;i ++){
//         dp[i] = new Array(len);
//     }

//     //charArr = ['a','b','c','b','a'];
//     let charArr:Array<string> = s.split("");

//     for(let i = 0;i < len;i ++){
//         dp[i][i] = true;
//     }

//     /**
//      * dp = [
//      *      [T,F,F,F,u],
//      *      [u,T,F,T,u],
//      *      [u,u,T,u,u],
//      *      [u,u,u,T,u],
//      *      [u,u,u,u,T]
//      * ]
//      * 
//      */

//         //i = 1,j = 3 ,cj = b,ci = b
//     for(let j = 1;j < len;j ++){
//         for(let i = 0;i < j;i ++){

//             if(charArr[i] != charArr[j]){
//                 dp[i][j] = false;
//             }else{
//                 if(j - i < 3){
//                     dp[i][j] = true;
//                 }else{
//                     dp[i][j] = dp[i + 1][j - 1];
//                 }
//             }
//             if(dp[i][j] && j - i + 1 > maxLen){
//                 maxLen = j - i + 1;
//                 begin = i;
//             }

//         }
//     }
//     console.log(dp,"dp",begin);
//     return s.substring(begin,begin + maxLen);
// };
// @lc code=end

