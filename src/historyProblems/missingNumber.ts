/**268. 缺失数字
 * 2020年9月26日
 * @param nums
 */
export function missingNumber(nums: number[]): number {

    // let sum = nums.length;
    // for(let i = 0;i < nums.length;i++) {
    //     sum ^= i ^ nums[i];
    // }
    // return sum ;

    let sum = 0;
    for (let i = 1; i <= nums.length; i++) {
        sum += i;
        sum -= nums[i - 1];
    }
    return sum;

};