/**
 * 27. 移除元素
 * @param nums 
 * @param val 
 */

export function removeElement(nums: number[], val: number): number {

    //解法1，本题推荐解法
    let len = nums.length;
    let i = 0;
    for(;i < len;i ++){
        if(nums[i] == val){
            nums[i] = nums[len - 1];
            i--;
            len --;
        }
    }
    return i;


    //解法2  不推荐
    for(let i = 0;i < nums.length;){
        if(nums[i] == val){
            nums.splice(i,1);
        }else{
            i ++;
        }
    }
    return nums.length;
};