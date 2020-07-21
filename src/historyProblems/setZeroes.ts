/**面试题 01.08. 零矩阵 */
/**
 Do not return anything, modify matrix in-place instead.
 */
export function setZeroes(matrix: number[][]): void {
    let colSet:Set<number> = new Set();
    let rowSet:Set<number> = new Set();
    for(let i = 0;i < matrix.length;i ++){
        for(let j = 0;j < matrix[i].length;j ++){
            if(matrix[i][j] == 0){
                if(!rowSet.has(j)){
                    rowSet.add(j);
                }
                if(!colSet.has(i)){
                    colSet.add(i);
                }
            }
        }
    }
    rowSet.forEach((rowIndex) =>{
        for(let i = 0;i < matrix.length;i ++){
            matrix[i][rowIndex] = 0;
        }
    })
    colSet.forEach((colIndex) =>{
        for(let i = 0;i < matrix[colIndex].length;i ++){
            matrix[colIndex][i] = 0;
        }
    })
};