/**
 *
 * @param n
 */
function sumNums(n) {
    return n && sumNums(n - 1) + n;
}
;
