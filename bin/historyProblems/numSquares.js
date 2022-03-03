"use strict";
// //279. 完全平方数
Object.defineProperty(exports, "__esModule", { value: true });
exports.numSquares = void 0;
// /**
//  * @param {number} n
//  * @return {number}
//  */
var numSquares = function (n) {
    let que = [n];
    let visited = new Set();
    let depth = 0;
    while (que.length > 0) {
        depth++;
        let len = que.length;
        for (let i = 0; i < len; i++) {
            let cur = que.pop();
            for (let j = 1; j * j <= cur; j++) {
                let temp = cur - j * j;
                if (temp == 0) {
                    return depth;
                }
                if (!visited.has(temp)) {
                    visited.add(temp);
                    que.unshift(temp);
                }
            }
        }
    }
    return depth;
};
exports.numSquares = numSquares;
