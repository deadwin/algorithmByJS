"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseLeftWords = void 0;
/**剑指 Offer 58 - II. 左旋转字符串
 * 2020年10月10日
 * @param s
 * @param n
 */
function reverseLeftWords(s, n) {
    // for(let i = 0;i < n;i ++){
    //     s += s[i];
    // }
    return s.slice(n) + s.slice(0, n);
}
exports.reverseLeftWords = reverseLeftWords;
;
