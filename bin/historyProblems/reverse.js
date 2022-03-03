"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse = void 0;
/**7. 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let symbol = false;
    if (x < 0) {
        symbol = true;
        x = Math.abs(x);
    }
    let ans = 0;
    let limit = Math.pow(2, 31);
    let len = 7;
    let index = 0;
    while (x != 0) {
        if (index >= len) {
            if ((symbol && -(ans * 10) < -limit) || (!symbol && (ans * 10) > limit - 1)) {
                return 0;
            }
        }
        index++;
        let temp = x % 10;
        ans = (ans * 10) + temp;
        x = Math.floor(x / 10);
    }
    return symbol ? -ans : ans;
};
exports.reverse = reverse;
