"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.letterCombinations = void 0;
/**17. 电话号码的字母组合
 * 2022年2月11日
 * 遍历求解
 */
function letterCombinations(digits) {
    if (!digits || digits.length == 0)
        return [];
    let map = new Map();
    let index = 0;
    for (let i = 2; i <= 9; i++) {
        let arr = [];
        let num = (i == 7 || i == 9) ? 3 : 2;
        for (let j = 0; j <= num; j++) {
            let s = String.fromCharCode(97 + index);
            index++;
            arr.push(s);
        }
        map.set(i, arr);
        // console.log(arr)
    }
    function deep(s) {
        return map.get(Number(s));
    }
    let ans = deep(digits[0]);
    let len = digits.length;
    index = 1;
    while (index < len) {
        let curArr = deep(digits[index]);
        let tempArr = [];
        for (let i = 0; i < ans.length; i++) {
            let str = ans[i];
            for (let j = 0; j < curArr.length; j++) {
                let newStr = str + curArr[j];
                tempArr.push(newStr);
            }
        }
        ans = tempArr;
        index++;
    }
    return ans;
}
exports.letterCombinations = letterCombinations;
;
