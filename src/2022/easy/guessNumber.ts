/** 374. 猜数字大小 2022年3月31日
 * 弱智题
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
declare var guess: any;

function guessNumber(n: number): number {
    let min = 1;
    let max = n;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let ret = guess(mid);
        if (ret == 0) {
            return mid;
        }
        if (ret == -1) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
};