/**面试题 08.03. 魔术索引
 * @param {number[]} nums
 * @return {number}
 */
export var findMagicIndex = function(nums:number[]) {

    for(let i = 0;i < nums.length;i ++){
        if(nums[i] == i){
            return i;
        }else if(nums[i] < i){
            i = Math.max(nums[i],i);
        }
    } 
    return -1;
};