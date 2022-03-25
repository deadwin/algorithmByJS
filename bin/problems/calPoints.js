"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calPoints = void 0;
/**682. 棒球比赛    2022年3月26日
 *
 * @param ops
 * @returns
 */
function calPoints(ops) {
    let sum = 0;
    let scoreStack = [];
    for (let i = 0; i < ops.length; i++) {
        let x = ops[i];
        let n = Number(x);
        if (Number.isNaN(n)) {
            if (x == "+") {
                let len = scoreStack.length;
                let score = scoreStack[len - 1] + scoreStack[len - 2];
                sum += score;
                scoreStack.push(score);
            }
            else if (x == "D") {
                let score = scoreStack[scoreStack.length - 1];
                sum += (score * 2);
                scoreStack.push(score * 2);
            }
            else if (x == "C") {
                let num = scoreStack.pop();
                sum -= num;
            }
        }
        else {
            sum += n;
            scoreStack.push(n);
        }
    }
    // console.log("sum", sum);
    return sum;
}
exports.calPoints = calPoints;
;
