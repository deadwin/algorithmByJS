/**剑指 Offer 17. 打印从 1 到最大的 n 位数
 * 2020年11月29日
 * @param n
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    let arr = [];
    function list(n) {
        if (n == 0)
            return;
        list(n - 1);
        arr.push(n);
    }
    let num = 0;
    for (let i = 0; i < n; i++) {
        num *= 10;
        num += 9;
    }
    list(num);
    return arr;
};
