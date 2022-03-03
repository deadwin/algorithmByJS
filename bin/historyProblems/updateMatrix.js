"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMatrix = void 0;
//542. 01 矩阵
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let arr = [];
            if (matrix[i][j] != 0) {
                arr.push({ i: i, j: j });
            }
            let len = arr.length;
            let depth = 0;
            while (len > 0) {
                len--;
                let cur = arr.shift();
                if (cur.i > 0) {
                    if (matrix[cur.i - 1][cur.j] == 0) {
                        depth++;
                        break;
                    }
                    arr.push({ i: cur.i - 1, j: cur.j });
                }
                if (cur.i < (matrix.length - 1)) {
                    if (matrix[cur.i + 1][cur.j] == 0) {
                        depth++;
                        break;
                    }
                    arr.push({ i: cur.i + 1, j: cur.j });
                }
                if (cur.j > 0) {
                    if (matrix[cur.i][cur.j - 1] == 0) {
                        depth++;
                        break;
                    }
                    arr.push({ i: cur.i, j: cur.j - 1 });
                }
                if (cur.j < (matrix[cur.i].length - 1)) {
                    if (matrix[cur.i][cur.j + 1] == 0) {
                        depth++;
                        break;
                    }
                    arr.push({ i: cur.i, j: cur.j + 1 });
                }
                if (len == 0) {
                    depth++;
                    if (arr.length == 0) {
                        break;
                    }
                    else {
                        len = arr.length;
                    }
                }
            }
            if (!result[i]) {
                result[i] = [];
            }
            result[i][j] = depth;
        }
    }
    return result;
};
exports.updateMatrix = updateMatrix;
