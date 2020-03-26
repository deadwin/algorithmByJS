"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} T
 * @return {number[]}
 */
exports.dailyTemperatures = function (T) {
    if (T.length == 0) {
        return [];
    }
    ;
    let arr = [];
    let stack = [];
    stack.push(0);
    for (let i = 1; i < T.length; i++) {
        let temp = T[i];
        let top = T[stack[stack.length - 1]];
        console.log(top, temp);
        while (temp > top) {
            arr[stack[stack.length - 1]] = i - stack[stack.length - 1];
        }
    }
    return arr;
};
