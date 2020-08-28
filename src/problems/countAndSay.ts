/**
 * @param {number} n
 * @return {string}
 */
export var countAndSay = function(n:number):string {
    
    /**
     * 分析：
     * f(n) =  D(s(1 -> n - 1)) n > 2
     * f(1) = s1 = 1           n = 1
     * f(2) = D(s(1))           n = 2
     * f(3) = D(s(2))
     */

     /**
      * 
      * 分析2：
      * 
      *    
      */
    let ans = 1;
    let start = ans;  
    for(let i = 1;i < n;i ++){
        ans = 0;
        let count = 0;
        let temp = 0;
        let index = 0;
        while(start != 0){
            let cur = start % 10;
            if(temp != cur){
                if(count > 0){
                    console.log(ans,count,temp,index,cur);
                    
                    let a = temp * Math.pow(10,index);
                    let b = count * Math.pow(10,index + 1);
                    console.log(ans, a,b,"ab")
                    ans = ans + a;
                    console.log(ans,"ans1===");

                    count = 0;
                    index = index + 2;
                    ans += b;
                    console.log(ans,"ans2===");
                }else{
                    start = Math.floor(start / 10);
                    count ++;
                }
            }else{
                start = Math.floor(start / 10);
                count ++;
            }
            temp = cur;
        }
        if(temp > 0){
            if(count == 0){
                count ++;
            }
            let data = temp * Math.pow(10,index) + (count) * Math.pow(10,index + 1);
            ans = ans + data;
        }
        console.log("ans",ans);

        start = ans;
    }
    return start.toString();
};