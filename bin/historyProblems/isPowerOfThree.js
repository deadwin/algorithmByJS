"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPowerOfThree = void 0;
/**326. 3的幂
 * 2020年9月26日
 *
 * 考数学知识
 * @param n
 */
function isPowerOfThree(n) {
    //1.暴力解
    if (n == 1) {
        return true;
    }
    while (n > 1) {
        n = n / 3;
        // console.log(n)
        if (n < 3) {
            return n == 1 ? true : false;
        }
    }
    return false;
}
exports.isPowerOfThree = isPowerOfThree;
;
