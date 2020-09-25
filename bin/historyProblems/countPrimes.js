"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**204. 计数质数
 * 2020年9月25日
 *
 * 答题前参考了厄拉多塞筛法
 *
 * TODO 此外还可以运用比特表（Bitmap）算法对筛法进行内存优化
 * @param n
 *
 */
function countPrimes(n) {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = true;
    }
    let ans = 0;
    for (let i = 2; i < arr.length; i++) {
        if (arr[i]) {
            ans++;
            for (let j = 2 * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }
    return ans;
}
exports.countPrimes = countPrimes;
;
