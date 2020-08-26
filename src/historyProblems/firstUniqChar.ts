/**387. 字符串中的第一个唯一字符
 * 2020年8月26日
 * @param {string} s
 * @return {number}
 */
export var firstUniqChar = function(s:string):number {
    let map:Map<string,number> = new Map();

    let ans:number = -1;
    for(let i = 0;i < s.length;i ++){
        if(map.has(s[i])){
            map.set(s[i],-1);
        }else{
            map.set(s[i],i);
        }
    }
    let keys = map.keys();
    let cur = keys.next();
    while(cur.value){
        if(map.get(cur.value) != -1){
            ans = map.get(cur.value);
            break;
        }
        cur = keys.next();
    }
    
    return ans;

};