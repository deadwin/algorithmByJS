/**剑指 Offer 13. 机器人的运动范围
 * 2020年11月14日  使用了BFS
 * @param m 
 * @param n 
 * @param k 
 */

export function movingCount(m: number, n: number, k: number): number {
    function getSum(num:number):number {
        let answer = 0;
    
        while(num) {
            answer += num % 10;
            // 向下取整，因为可能出现小数
            num = Math.floor(num / 10);
        }
    
        return answer;
    } 

    let ans = 0;
    let func = function(arr:Array<number>,i:number,j:number){
        if(i >= m || i < 0 || j >= n || j < 0){
            return;
        }
        let num = getSum(i) + getSum(j);
        if(arr[i][j] != "/" && num <= k){
            ans ++;
            arr[i][j] = "/";
        }else{
            return;
        }
        func(arr,i + 1,j);
        func(arr,i - 1,j);
        func(arr,i,j + 1);
        func(arr,i,j - 1);

    }
    let arr = new Array(m);
    for(let i = 0;i < arr.length;i ++){
        arr[i] = new Array(n);
    }
    func(arr,0,0);
    return ans;
};