/**
 * 1748. 唯一元素的和 
 * 2022年5月31日
 */
function sumOfUnique(nums: number[]): number {
    let obj = {}
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (obj[num]) {
            if (obj[num] == 1) {
                sum -= num;
                obj[num]++;
            }
        } else {
            obj[num] = 1;
            sum += num;
        }
    }
    return sum;
};