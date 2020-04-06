//494. 目标和

/** 暴力搜索求目标和
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
export var findTargetSumWays = function(nums:number[], S:number) {
    let count = 0;
    const func = function(sum,index){
        if(index == nums.length){
            if(sum == S){
                count ++;
            }
            return;
        }
        
        func(sum + nums[index],index + 1);
        func(sum - nums[index],index + 1);
    }
    func(0,0);
    return count;
};