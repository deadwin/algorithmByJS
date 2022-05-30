"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAlternatingBits = void 0;
/**693. 交替位二进制数  2022年3月29日
 * 有时间空间双O(1)解法　todo
 * @param n
 * @returns
 */
function hasAlternatingBits(n) {
    let isZero = n & 1;
    while (n > 0) {
        n = n >> 1;
        let a = n & 1;
        if (isZero == a) {
            return false;
        }
        isZero = a;
    }
    return true;
}
exports.hasAlternatingBits = hasAlternatingBits;
;
