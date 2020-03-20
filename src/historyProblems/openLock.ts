//752. 打开转盘锁
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
export var openLock = function(deadends:string[], target:string) {
    //注意ES5不支持Set、Map等ES6中新增的数据结构。
    let deadSet:Set<string> = new Set(deadends);
    // console.log("初始：",deadSet,target)

    let que:Array<string> = [];
    que.push("0000");
    que.push("");

    let seen:Set<string> = new Set();
    seen.add("0000");
    var depth = 0;
    // let index = 0;
    while(que.length != 0){
        let node:string = <string>que.shift();
        // index ++;
        // console.log(que.length,"node")
        if(node == ""){
            depth ++;
            //注意这里如果不判断下que的长度，当死锁时会陷入死循环
            if(que.length > 0 && que[0] != ""){
                que.push("");
                // index = 0;
            }
        }else if(node == target){
            return depth;
        }else if(!deadSet.has(node)){
            for(let i = 0;i < 4;i ++){
                for(let d = -1; d <= 1;d +=2){
                    let y = (Number(node.charAt(i)) + d + 10) % 10;
                    let newStr = node.substring(0,i) + y + node.substring(i + 1);
                    if(!seen.has(newStr)){
                        seen.add(newStr);
                        que.push(newStr)
                    }
                }
            }
        }
    }
    return -1;
};