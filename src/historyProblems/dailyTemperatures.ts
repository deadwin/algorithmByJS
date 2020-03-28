//739. 每日温度

//解法1，使用遍历
/**
 * @param {number[]} T
 * @return {number[]}
 */
//var dailyTemperatures = function (T) {
//     let arr = [];
//     for (let i = 0; i < T.length; i++) {
//         let temp = T[i];
//         let j = i + 1;
//         for (; j < T.length; j++) {
//             if (T[j] > temp) {
//                 arr.push(j - i);
//                 break;
//             }
//             else {
//             }
//         }
//         if (j == T.length) {
//             arr.push(0);
//         }
//     }
//     return arr;
// };


//解法2，使用栈
export var dailyTemperatures = function (T:number[]):number[] {
    if(T.length == 0)   return [];
    let arr:number[] = [];
    for(let i = 0;i < T.length;i ++){
        arr[i] = 0;
    }
    let stack = [];
    stack.push(0);
    for (let i = 1; i < T.length; i++) {
        let temp = T[i];
        while(stack.length > 0){
            let topIndex = stack[stack.length - 1];
            let top = T[topIndex];
            if(top < temp){
                arr[topIndex] = i - topIndex;
                stack.pop();
            }else{
                break;
            }
        }
        stack.push(i);
    }
    return arr;
};