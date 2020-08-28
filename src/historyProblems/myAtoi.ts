/**8. 字符串转换整数 (atoi)
 * 2020年8月28日
 * @param {string} str
 * @return {number}
 */
export var myAtoi = function(str:string):number {
    //TODO 官方推荐自动机写法
     







    //解法2，暴力遍历法，自写
    let ans:number = null;
    let symbol:string = null;
    let MAX_LIMIT = Math.pow(2,31);
    for(let i = 0;i < str.length;i ++){
        let char = str.charAt(i);
        if(ans === null){
            if(char === " "){
                if(symbol){
                    return 0;
                }
            }else{
                if(!symbol){
                    if(char === "-" || char === "+"){
                        symbol = char;
                        continue;
                    }
                }
                if(char === " " || isNaN(Number(char))){
                  return 0;
                }else{
                    ans = Number(char);
                }
            }
        }else{
            if(char === " " || isNaN(Number(char))){
                return symbol == "-" ? -ans : ans;
            }else{
                let cur = Number(char) + ans * 10;
                if(cur > (MAX_LIMIT - 1)){
                    if(symbol == "-"){
                        if(cur > MAX_LIMIT){
                            return -MAX_LIMIT;
                        }
                    }else{
                        return MAX_LIMIT - 1;
                    }
                }
                ans = cur;
            }
        }
    }
    if(ans == null){
        return 0;
    }
    return symbol == "-" ? -ans : ans;
};