/**509/剑指 Offer 10- I. 斐波那契数列
 * 2020年10月13日
 * @param {number} n
 * @return {number}
 */
var fib = function(n:number):number {
    if(n <= 1) return n;
    let arr = new Array(n + 1);
    arr[0] = 0;
    arr[1] = 1;
    let mod = 1000000007;
    for(let i = 2;i < n + 1;i ++){
        arr[i] = (arr[i - 1] + arr[i - 2]) % mod;
    }
    return arr[n];
};