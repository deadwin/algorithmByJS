/**18. 四数之和
 * 2020年10月6日
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
export var fourSum = function(nums:number[], target:number):number[][] {
    let ansArr = [];
    for(let i = 0;i < nums.length - 3;i ++){
        let _a = nums[i];
        for(let k = i + 1;k < nums.length - 2;k ++){
            let _b = nums[k];
            for(let l = k + 1;l < nums.length - 1;l ++){
                let _c = nums[l];
                for(let m = l + 1;m < nums.length;m ++){
                    if(_a + _b + _c + nums[m] == target){
                        //关键之一是排序
                        let arr = [_a,_b,_c,nums[m]].sort();
                        let canPush = false;
                        for(let _m = 0; _m < ansArr.length; _m ++){
                            let temp = ansArr[_m];
                            let index = 0;
                            for(let _n = 0; _n < temp.length; _n ++){
                                if(arr[_n] == temp[_n]){
                                    index ++;
                                }
                            }
                            if(index == 4){
                                canPush = false;
                                break;
                            }else{
                                canPush = true;
                            }
                        }
                        if(canPush || ansArr.length == 0){
                            ansArr.push(arr);
                        }
                    }
                }
            }
        }
    }
    return ansArr;
};