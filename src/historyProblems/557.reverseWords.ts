/**557. 反转字符串中的单词 III
 * 2020年8月23日
 * @param {string} s
 * @return {string}
 */
export var reverseWords_3 = function(s:string):string {
    if(!s || s.length == 0) return "";
    let ans = "";
    let curStr = "";
    for(let i = 0;i < s.length;i ++){
        if(s[i] == " "){
            if(curStr.length > 0){
                ans += curStr;
                curStr = "";
            }
            ans += s[i];
        }else{
            curStr = s[i] + curStr;
        }
    }
    if(curStr.length > 0){
        ans += curStr;
    }
    return ans;
};