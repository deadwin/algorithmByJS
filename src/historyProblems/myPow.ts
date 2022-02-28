/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export var myPow = function (x: number, n: number): number {
    if (n < 0) {
        return 1 / myPow(x, -n);
    }
    if (n == 0) {
        return 1;
    }
    if (n & 1) {
        return x * myPow(x, n - 1);
    }
    return myPow(x * x, n / 2);
};

// 2,5 - 4,3,->16->2