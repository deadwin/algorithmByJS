"use strict";
/**剑指 Offer 46. 把数字翻译成字符串
 * 2020年11月2日
 * @param num
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateNum = void 0;
function translateNum(num) {
    //f(0) = 0
    //f(1) = 1
    //f(2) = l(2) = ((<=25) (2) ? (1))
    //f(3) =max< f(1) + l(2) - 1,f(2)>
    //f(4) = max< f(2) + l(2) - 1 , f(3)>
    let strNum = num.toString();
    if (strNum.length < 2)
        return strNum.length;
    let ret = new Array(strNum.length);
    ret[0] = 1;
    let num1 = Number(strNum.slice(0, 2));
    if (num1 <= 25) {
        ret[1] = 2;
    }
    else {
        ret[1] = 1;
    }
    for (let i = 2; i < ret.length; i++) {
        let num = Number(strNum.slice(i - 1, i + 1));
        if (num <= 25 && num >= 10) {
            ret[i] = ret[i - 2] + ret[i - 1];
        }
        else {
            ret[i] = ret[i - 1];
        }
    }
    // console.log(ret)
    return ret[ret.length - 1];
}
exports.translateNum = translateNum;
;
