/**221. 最大正方形
 * 2020年9月28日
 * 1.使用了动态规划
 * 2.使用了暴力解法
 * @param matrix 
 */
export function maximalSquare(matrix: string[][]): number {
    /**动态规划
     * f(1,1) = 1;
     * f(i,j) = min(f(i - 1,j),f(i,j - 1),f(i - 1,j -1)) + 1
     * 
     * (f(i,0) || f(0,j)) = (1 || 0)
     */
    let dp = new Array(matrix.length);
    for (let i = 0; i < dp.length;i ++){
        dp[i] = new Array(matrix[i].length);
    }
    let maxLen = 0;
    for(let i = 0;i < matrix.length;i ++){
        for(let j = 0;j < matrix[i].length;j ++){
            if(matrix[i][j] == "1"){
                if(i == 0 || j == 0){
                    dp[i][j] = 1;
                }else{
                    dp[i][j] = Math.min(dp[i - 1][j],dp[i][j - 1],dp[i - 1][j - 1]) + 1;
                }
            }else{
                dp[i][j] = 0;
            }
            maxLen = Math.max(maxLen,dp[i][j]);
        }
    }
    return Math.pow(maxLen,2);

    //暴力解法
    // let squareLen = 0;
    // for(let i = 0; i < matrix.length;i ++){
    //     for(let j = 0;j < matrix[i].length;j ++){
    //         if(matrix[i][j] == "1"){
    //             squareLen = Math.max(squareLen,1);
    //             /**   x
    //              *  y 0   1   2
    //              *    3   4   5
    //              *    6   7   8
    //              * 
    //              * //(1 + i,j),(1 + i,1 + j),(0 + i,1 + j)
    //              * //(2 + i,0 + j),(2 + i,1 + j ),(2 + i,2 + j),(0 + i,2 + j),(1 + i,2 + j),(2 + i,2 + j)
    //              */
    //             for(let y = i + 1;y < matrix.length;y ++){
    //                 let x = y - i + j;
    //                 let isRect = true;
    //                 let a = i;
    //                 for(;a <= y;a ++){
    //                     for(let b = j; b <= x;b ++){
    //                         if(matrix[a][b] != "1"){
    //                             isRect = false;
    //                             break;
    //                         }
    //                     }
    //                     if(!isRect){
    //                         break;
    //                     }
    //                 }
    //                 squareLen = Math.max(squareLen,a - i);
    //             }
    //         }
    //     }
    // }
    // return Math.pow(squareLen,2);
};