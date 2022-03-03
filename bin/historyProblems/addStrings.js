"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStrings = void 0;
/**415. 字符串相加
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let index = 0;
    let tik = 0;
    let maxLen = Math.max(len1, len2);
    let ans = "";
    while (index < maxLen) {
        let l1 = len1 - index - 1;
        let n1, n2;
        if (l1 >= 0) {
            n1 = Number(num1[l1]);
        }
        else {
            n1 = 0;
        }
        let l2 = len2 - index - 1;
        if (l2 >= 0) {
            n2 = Number(num2[l2]);
        }
        else {
            n2 = 0;
        }
        ;
        let num = n1 + n2 + tik;
        tik = Math.floor(num / 10);
        let temp = num % 10;
        ans += temp;
        // console.log(temp,tik)
        index++;
    }
    // console.log(ans);
    if (tik > 0) {
        ans += tik;
    }
    return ans.split("").reverse().join("");
};
exports.addStrings = addStrings;
"6";
"456";
//6  4,     
