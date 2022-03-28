/**693. 交替位二进制数  2022年3月29日
 * 有时间空间双O(1)解法　todo
 * @param n 
 * @returns 
 */
export function hasAlternatingBits(n: number): boolean {
    let isZero: any = n & 1;
    while (n > 0) {
        n = n >> 1;
        let a = n & 1;
        if (isZero == a) {
            return false;
        }
        isZero = a;
    }
    return true;
};