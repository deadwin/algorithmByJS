/**151. 翻转字符串里的单词
 * 2020年8月15日
 * @param {string} s
 * @return {string}
 */
export var reverseWords = function(s:string):string {
    let ans = "";
    let index = 0;
    let curWord = "";
    let space = false;
    while(index < s.length){
        if(s[index] == " "){
            space = true;
            if(curWord.length > 0){
                ans = curWord + ans;
                curWord = "";
            }

        }else{
            if(space){
                if(ans.length > 0){
                    ans = " " + ans;
                }
                space = false;
            }
            curWord += s[index];
        }
        index ++;
    }
    if(curWord){
        ans = curWord + ans;
    }
    return ans;
};
