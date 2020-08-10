/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
export var  longestPalindrome = function(s: string): number {
    let obj = {};
    let len = s.length;
    let arr = [];
    let delta = len;
    for(let i = 0;i < s.length;i ++){
        arr.push(s[i]);
        if(obj[s[i]] == undefined){
            obj[s[i]] = i;
        }else{
            arr[obj[s[i]]] = undefined;
            arr[i] = undefined;
            obj[s[i]] = undefined;
            delta -= 2;
        }
    }
    let ans = len - delta;
    if(ans < len){
        ans += 1;
    }
    return ans;
};
// @lc code=end

