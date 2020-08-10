/**322. 零钱兑换
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export var coinChange = function(coins:number[], amount:number):number {
    let dp = new Array(amount + 1);
    dp[0] = 0;
    for(let i = 1;i < dp.length;i ++){
        dp[i] = amount + 1;
        for(let j = 0;j < coins.length;j ++){
            // if (i >= coins[j]) {
            //判断上一组是否为空，可提升速度140ms到128ms
            if(i >= coins[j] && (dp[i - coins[j]] != amount + 1)){
                dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
            }
        }
    }
    return dp[amount] == amount + 1 ? -1 : dp[amount];
};