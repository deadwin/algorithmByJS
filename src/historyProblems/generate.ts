/**118. 杨辉三角
 * 2020年8月23日
 * @param {number} numRows
 * @return {number[][]}
 */
export var generate = function(numRows: number):number[][] {
    let arr:number[][] = new Array(numRows);
    for(let i = 0;i < numRows;i++) {
        arr[i] = new Array(i);
        arr[i][0] = 1;
        arr[i][i] = 1;
        let j = 1;
        for(;j < i;j ++){
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
        }
        console.log(arr[i])
    }
    return arr;
};
