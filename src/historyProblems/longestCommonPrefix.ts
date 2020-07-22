/**
 * 14. 最长公共前缀
 * @param strs strs
 */

export function longestCommonPrefix(strs: string[]): string {
    if(strs.length == 0){
        return "";
    }
    let i = 0;
    for(;i < strs[0].length;i ++){
        let s = strs[0][i];
        for(let j = 1;j < strs.length;j ++){
            if(strs[j][i] !== s){
                return strs[0].substring(0,i);
            }
        }
    }
    return strs[0];
};