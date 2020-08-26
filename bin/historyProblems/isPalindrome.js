"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**125. 验证回文串
 * 2020年8月27日
 * @param {string} s
 * @return {boolean}
 */
exports.isPalindrome = function (s) {
    s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    let i = 0;
    let j = s.length - i - 1;
    for (; i <= j; i++) {
        if (s[i] != s[j]) {
            return false;
        }
        j--;
    }
    return true;
};
