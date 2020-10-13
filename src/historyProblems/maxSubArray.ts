
/**
 * 53. 最大子序和 /剑指 Offer 42. 连续子数组的最大和
 * 2020年9月24日/2020年10月14日
 * 
 * @param nums 
 */
export function maxSubArray(nums: number[]): number {
    //1.暴力解法
    // if(!nums || nums.length == 0) return 0;
    // let max = nums[0];
    // for(let i = 0; i < nums.length ;i ++){
    //     let sum = 0;
    //     for(let j = i;j  < nums.length;j ++){
    //         sum += nums[j];
    //         max = Math.max(max,sum);

    //     }
    // }
    // return max;

    //2.动态规划
    if(!nums || nums.length == 0) return 0;
    //转移方程
    //ans = max<0<=i<=n - 1>(f(i))
    //f(i) = max(f(i - 1) + nums[i],nums[i]);
    let arr = new Array(nums.length);
    arr[0] = nums[0];
    let max = arr[0];
    for(let i = 1;i < nums.length;i ++){
        arr[i] = Math.max(arr[i - 1] + nums[i],nums[i]);
        max = Math.max(arr[i],max);
    }    
    return max;

};