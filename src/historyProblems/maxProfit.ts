/**121. 买卖股票的最佳时机
 * 2020年9月24日
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
    // f(i) = max(f(i - 1),prices[i] - minPrice)
    let arr = new Array(prices.length);
    arr[0] = 0;
    let minPrice = prices[0];
    for(let i = 1; i < prices.length; i++){
        arr[i] = Math.max(arr[i - 1],prices[i] - minPrice);
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }
    }
    // console.log(arr)
    return arr[arr.length - 1];
};
