/**242. 有效的字母异位词
 * 2020年8月27日
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export var isAnagram = function(s:string, t:string):boolean {
    if(s.length != t.length) return false;
    let map:Map<string,number> = new Map();
    for(let i = 0;i < s.length;i ++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        }else{
            map.set(s[i],1);
        }
        if(map.has(t[i])){
            map.set(t[i], map.get(t[i]) - 1);
        }else{
            map.set(t[i],-1);
        }
    }
    let values = map.values();
    let curValue = values.next();
    while(!curValue.done){
        if(curValue.value !== 0){
            return false;
        }
        curValue = values.next();
    }
    return true;
};