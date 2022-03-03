"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openLock = void 0;
//752. 打开转盘锁
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    //注意ES5不支持Set、Map等ES6中新增的数据结构。
    let deadSet = new Set(deadends);
    // console.log("初始：",deadSet,target)
    let que = [];
    que.push("0000");
    que.push("");
    let seen = new Set();
    seen.add("0000");
    var depth = 0;
    // let index = 0;
    while (que.length != 0) {
        let node = que.shift();
        // index ++;
        // console.log(que.length,"node")
        if (node == "") {
            depth++;
            //注意这里如果不判断下que的长度，当死锁时会陷入死循环
            if (que.length > 0) {
                que.push("");
                // index = 0;
            }
        }
        else if (node == target) {
            return depth;
        }
        else if (!deadSet.has(node)) {
            for (let i = 0; i < 4; i++) {
                for (let d = -1; d <= 1; d += 2) {
                    // let newStr = str.substring(i, i + 1);  substring比charAt(约208ms)此处多花费约92ms
                    let y = (Number(node.charAt(i)) + d + 10) % 10;
                    let newStr = node.substring(0, i) + y + node.substring(i + 1);
                    if (!seen.has(newStr)) {
                        seen.add(newStr);
                        que.push(newStr);
                    }
                }
            }
        }
    }
    return -1;
};
exports.openLock = openLock;
