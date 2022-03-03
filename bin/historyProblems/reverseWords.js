"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
/**151. 翻转字符串里的单词
 * 2020年8月15日
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let ans = "";
    let index = 0;
    let curWord = "";
    let space = false;
    while (index < s.length) {
        if (s[index] == " ") {
            space = true;
            if (curWord.length > 0) {
                ans = curWord + ans;
                curWord = "";
            }
        }
        else {
            if (space) {
                if (ans.length > 0) {
                    ans = " " + ans;
                }
                space = false;
            }
            curWord += s[index];
        }
        index++;
    }
    if (curWord) {
        ans = curWord + ans;
    }
    return ans;
};
exports.reverseWords = reverseWords;
