/**125. 验证回文串
 * 2020年8月27日
 * @param {string} s
 * @return {boolean}
 */
export var isPalindrome = function(s: string):boolean {
    s = s.replace(/[^0-9a-zA-Z]/g,"").toLowerCase();
    let i = 0
    let j = s.length - i - 1;
    for(; i <= j;i ++){
        if(s[i] != s[j]){
            return false;
        }
        j --;
    }
    return true;
};