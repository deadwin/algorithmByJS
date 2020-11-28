"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "[1,2,3,null,null,4,5]";
function isAnagram(s, t) {
    if (s.length != t.length)
        return false;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1);
        }
        else {
            map.set(s[i], map.get(s[i]) + 1);
        }
        if (!map.has(t[i])) {
            map.set(t[i], -1);
        }
        else {
            map.set(t[i], map.get(t[i]) - 1);
        }
    }
    let flag = true;
    map.forEach((value) => {
        if (value != 0) {
            flag = false;
        }
    });
    return flag;
}
;
console.log(isAnagram("a", "b"));
let arr = [1, 2, 3];
console.log(arr.toString());
