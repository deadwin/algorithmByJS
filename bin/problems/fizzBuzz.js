"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**12. Fizz Buzz
 * 2020年9月25日
 * TODO 存在另外几种更好的解题方式
 * @param n
 */
function fizzBuzz(n) {
    let ans = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            ans.push("FizzBuzz");
        }
        else if (i % 3 == 0) {
            ans.push("Fizz");
        }
        else if (i % 5 == 0) {
            ans.push("Buzz");
        }
        else {
            ans.push(i + "");
        }
    }
    return ans;
}
exports.fizzBuzz = fizzBuzz;
;
