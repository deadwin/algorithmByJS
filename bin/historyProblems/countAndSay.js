"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**38. 外观数列
 * 2020年8月29日
 * @param {number} n
 * @return {string}
 */
exports.countAndSay = function (n) {
    /**
     *
     * 解法1：暴力使用数学运算，当结果超过2^53时，会丢失精度，通不过testcase
     *
     *
     */
    // let ans = 1;
    // let start = ans;  
    // for(let i = 1;i < n;i ++){
    //     ans = 0;
    //     let count = 0;
    //     let temp = 0;
    //     let index = 0;
    //     while(start != 0){
    //         let cur = start % 10;
    //         if(temp != cur){
    //             if(count > 0){
    //                 console.log(ans,count,temp,index,cur);
    //                 let a = temp * Math.pow(10,index);
    //                 let b = count * Math.pow(10,index + 1);
    //                 // console.log(ans, a,b,"ab")
    //                 //当n等于等于10的时候，这里会超过js安全数的最大限制2^53,导致精度丢失，出现bug
    //                 //如：1311123113112211 10000000000000000 200000000000000000
    //                 // console.log(11311123113112211)    //11311123113112212
    //                 // console.log(11311123113112212n === 11311123113112211n) false
    //                 // console.log(11311123113112212 === 11311123113112211)  true
    //                 ans = ans + a;
    //                 count = 0;
    //                 index = index + 2;
    //                 ans += b;
    //             }else{
    //                 start = Math.floor(start / 10);
    //                 count ++;
    //             }
    //         }else{
    //             start = Math.floor(start / 10);
    //             count ++;
    //         }
    //         temp = cur;
    //     }
    //     if(temp > 0){
    //         if(count == 0){
    //             count ++;
    //         }
    //         let data = temp * Math.pow(10,index) + (count) * Math.pow(10,index + 1);
    //         ans = ans + data;
    //     }
    //     start = ans;
    // }
    // return start.toString();
    //解法2，用数组来存储结果
    let start = [1];
    let ans = start;
    for (let i = 1; i < n; i++) {
        start = ans;
        ans = [];
        let j = 0;
        let temp = start[0];
        let count = 0;
        for (; j < start.length; j++) {
            if (temp == start[j]) {
                count++;
            }
            else {
                ans.push(count);
                ans.push(temp);
                temp = start[j];
                count = 1;
            }
        }
        ans.push(count);
        ans.push(temp);
    }
    return ans.toString().split(",").join("");
    //21
};
