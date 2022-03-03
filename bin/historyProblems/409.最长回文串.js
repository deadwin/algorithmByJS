"use strict";
/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestPalindrome = void 0;
// @lc code=start
var longestPalindrome = function (s) {
    let obj = {};
    let len = s.length;
    let arr = [];
    let delta = len;
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
        if (obj[s[i]] == undefined) {
            obj[s[i]] = i;
        }
        else {
            arr[obj[s[i]]] = undefined;
            arr[i] = undefined;
            obj[s[i]] = undefined;
            delta -= 2;
        }
    }
    let ans = len - delta;
    if (ans < len) {
        ans += 1;
    }
    return ans;
};
exports.longestPalindrome = longestPalindrome;
// @lc code=end
