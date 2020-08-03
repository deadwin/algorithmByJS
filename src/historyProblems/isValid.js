"use strict";
//20. 有效的括号
Object.defineProperty(exports, "__esModule", { value: true });
//我的烂解 2020年3月26日
/**
 * @param {string} s
 * @return {boolean}
 */
exports.isValid = function (s) {
    if (s.length == 0) {
        return true;
    }
    else if (s.length % 2 != 0) {
        return false;
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (char == "(" || char == "{" || char == "[") {
            stack.push(char);
        }
        else {
            if (stack.length == 0) {
                return false;
            }
            let last = stack[stack.length - 1];
            if (char == ")" && last == "(") {
                stack.pop();
            }
            else if (char == "}" && last == "{") {
                stack.pop();
            }
            else if (char == "]" && last == "[") {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    return stack.length == 0;
};
