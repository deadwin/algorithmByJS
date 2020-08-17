/*
 * @lc app=leetcode.cn id=696 lang=typescript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
export function countBinarySubstrings(s: string): number {
    if(s.length <= 1) return 0;
    let map:Map<number,{key:string,flag:boolean,len:number}> = new Map();
    let ansNum = 0;
    for(let i = 0;i < s.length;i ++){
        map.forEach((data,key) =>{
            if(!data.flag && data.key == s[i]){
                data.len ++;
            }else if(data.key !== s[i]){
                data.flag = true;
                data.len --;
                if(data.len == 0){
                    ansNum ++;
                    map.delete(key);
                }
            }else{
                map.delete(key);
            }
        })
        map.set(i,{
            key:s[i],
            flag:false,
            len:1
        });
    }





    return ansNum;
};
// @lc code=end

