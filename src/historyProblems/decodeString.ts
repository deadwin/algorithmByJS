//394. 字符串解码


/**
 * @param {string} s
 * @return {string}
 */
export var decodeString = function(s:string):string {
    let result = "";
    let stack:Array<string> = [];
    let numStack : Array<string> = [];

    for(let i = 0;i < s.length;i ++){
        // console.log(s[i],"===index");
        if(s[i] == "["){
            stack.push("");
        }else if(s[i] == "]"){
            let str = stack.pop();
            let num = parseInt(numStack.pop());
            // console.log("stack",stack);
            
            let temp = stack.length == 0 ? result : stack[stack.length - 1];

            for(let j = 0;j < num;j ++){
                temp += str;
            }
            if(stack.length == 0){
                result = temp;
            }else{
                stack[stack.length - 1] = temp;
            }
        }else {
            if(isNaN(parseInt(s[i]))){
                if(stack.length == 0){
                    result += s[i];
                }else{
                    stack[stack.length - 1] += s[i];
                }
            }else{
                if(numStack.length == stack.length){
                    numStack.push("");
                }
                //是数字
                // console.log("是数字",s[i])
                numStack[numStack.length - 1] += s[i];
            }
        }
    }
    return result;
};


