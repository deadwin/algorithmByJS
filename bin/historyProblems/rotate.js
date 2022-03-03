"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotate = void 0;
/**面试题 01.07. 旋转矩阵
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    // let newMatrix:Array<Array<number>> = [];
    // for(let j = 0;j < matrix[0].length;j ++){
    //     let newi = j;
    //     newMatrix.push([]);
    //     for(let i = matrix.length - 1;i >= 0;i --){
    //         newMatrix[newi].push(matrix[i][j]);
    //     }
    // }
    const len = matrix.length;
    let temp;
    for (let i = 0; i < len / 2; i++) {
        let m = len - 1;
        for (let j = i; j < m - i; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[m - j][i];
            matrix[m - j][i] = matrix[m - i][m - j];
            matrix[m - i][m - j] = matrix[j][m - i];
            matrix[j][m - i] = temp;
        }
    }
    // console.log(matrix);
}
exports.rotate = rotate;
;
/**
 *
 *
 *
 * ij                                       ij
 * 00   01   02            10   00          00     01
 * 10   11   12            11   01          10     11
 *                         12   02          20     21
 *
 */
