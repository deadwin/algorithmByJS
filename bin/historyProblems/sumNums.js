/**剑指 Offer 64. 求 1 + 2 + … + n
 * 2020年11月28日
 * 注意不能用if
 * @param n
 */
function sumNums(n) {
    return n && sumNums(n - 1) + n;
}
;
