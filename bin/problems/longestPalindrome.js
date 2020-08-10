"use strict";
/**
 *
 * f[i][j] = true;
 * f[i - 1][j + 1] = true;
 *
 *
 *
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**5. 最长回文子串
 * @param {string} s
 * @return {string}
 */
exports.longestPalindrome = function (s) {
    if (s.length == 0)
        return "";
    let ans = s[0];
    return;
    for (let i = 0; i < s.length - 1; i++) {
        let cur = s[i];
        let j = i + 1;
        if (s[j] == cur) {
        }
    }
};
