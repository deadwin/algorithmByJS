/**剑指 Offer 47.礼物的最大价值
 * 2020年10月14日
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    //f(m)(n) = max(f(m - 1)(n) + s,f(m)(n - 1) + s)
    //if(m == 0) f(m)(n) = f(m)(n -1) + s
    //if(n == 0) f(m)(n) = f(m - 1)(n) + s
    if (!grid || grid.length == 0 || grid[0].length == 0)
        return 0;
    let arr = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        arr[i] = new Array(grid[i].length);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i == 0 && j == 0) {
                arr[i][j] = grid[i][j];
            }
            else if (i == 0) {
                arr[i][j] = arr[i][j - 1] + grid[i][j];
            }
            else if (j == 0) {
                arr[i][j] = arr[i - 1][j] + grid[i][j];
            }
            else {
                arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]) + grid[i][j];
            }
        }
    }
    return arr[grid.length - 1][grid[0].length - 1];
};
