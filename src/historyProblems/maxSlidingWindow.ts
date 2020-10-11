/**剑指 Offer 59 - I. 滑动窗口的最大值
 * 2020年10月12日
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export var maxSlidingWindow = function(nums:number[], k:number):number[] {
    //解法2 使用单调队列
    if(!nums || nums.length == 0) return [];
    let que = [];
    let ansArr = new Array(nums.length - k + 1);
    for(let  i = 0;i < k;i ++){
        while(que.length > 0 && que[que.length - 1] < nums[i]){
            que.pop();
        }
        que.push(nums[i]);
    }
    ansArr[0] = que[0];

    for(let i = k;i < nums.length;i ++){
        if(que[0] == nums[i - k]){
            que.shift();
        }
        while(que.length > 0 && que[que.length - 1] < nums[i]){
            que.pop();
        }
        que.push(nums[i]);

        ansArr[i - k + 1] = que[0];
    }
    console.log(ansArr)
    return ansArr;

    // //解法1.时间复杂度O(n^2)
    // if(!nums || nums.length == 0) return [];
    // let ansArr = [];
    // let flag = 0;
    // let index = flag;
    // for(let i = 0; i < nums.length;i ++){
    //     if(i - flag > k - 1){
    //         index = flag + 1;
    //         while(flag < i){
    //             flag ++;
    //             if(nums[index] < nums[flag]){
    //                 index = flag;
    //             }
    //         }
    //         flag = index;
    //     }else{
    //         if(nums[index] < nums[i]){
    //             index = i;
    //         }
    //     }
    //     if(i >= k - 1){
    //         ansArr.push(nums[index]);
    //     }
    // }
    // return ansArr;
};