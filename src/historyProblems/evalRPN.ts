//150. 逆波兰表达式求值

/**
 * @param {string[]} tokens
 * @return {number}
 */
export var evalRPN = function(tokens : string[]):number {
    if(tokens.length == 0){
        return 0;
    }
    let stack:Array<any> = [];
    let lastNum:number = Number(tokens[0]);
    for(let i = 1;i < tokens.length;i ++){
        let token = tokens[i];
        // console.log(stack[stack.length - 1],token,lastNum,'---')
        if(token == "+"){
            let num = <number>stack.pop();
            lastNum =  num + lastNum;
        }else if(token == "-"){
            let num = <number>stack.pop();
            lastNum = num - lastNum;
        }else if(token == "*"){
            let num = <number>stack.pop();
            lastNum = num * lastNum;
        }else if(token == "/"){
            let num = <number>stack.pop();
            
            //保留整数部分，可用Math.trunc()方法代替
            // let temp = num / lastNum;
            // let absNum = Math.floor(Math.abs(temp)).toFixed(0);
            // lastNum = Number(temp > 0 ? absNum : -absNum);

            //Math.trunc()方法会将数字的小数部分去掉，只保留整数部分。
            lastNum = Math.trunc(num / lastNum);
        }else{
            stack.push(lastNum);
            lastNum = Number(token);
        }
    }

    // console.log(lastNum,"lastNum")
    return lastNum;
};