"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**264. 丑数 II  / 剑指 Offer 49. 丑数
 * 2020年11月4日
 * 参考了答案
 * @param n
 */
function nthUglyNumber(n) {
    if (n < 1)
        return 0;
    let dp = new Array(n);
    dp[0] = 1;
    let a = 0, b = 0, c = 0;
    for (let i = 1; i < dp.length; i++) {
        let na = dp[a] * 2, nb = dp[b] * 3, nc = dp[c] * 5;
        dp[i] = Math.min(na, nb, nc);
        if (dp[i] == na)
            a++;
        if (dp[i] == nb)
            b++;
        if (dp[i] == nc)
            c++;
    }
    return dp[n - 1];
}
exports.nthUglyNumber = nthUglyNumber;
;
