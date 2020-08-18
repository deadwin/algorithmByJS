"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildNext = (p) => {
    let m = p.length;
    let j = 0;
    let n = new Array(m);
    n[0] = -1;
    let t = n[0];
    while (j < m - 1) {
        if ((t < 0) || p[j] == p[t]) {
            j++;
            t++;
            n[j] = t;
        }
        else {
            t = n[t];
        }
    }
    return n;
};
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
exports.strStr = function (haystack, needle) {
    if (needle.length == 0)
        return 0;
    if (needle.length > haystack.length)
        return -1;
    let next = buildNext(needle);
    let m = haystack.length, i = 0;
    let n = needle.length, j = 0;
    while (j < n && i < m) {
        if (0 > j || haystack[i] == needle[j]) {
            i++;
            j++;
        }
        else {
            j = next[j];
        }
    }
    if (i - j == haystack.length || j < needle.length) {
        return -1;
    }
    return i - j;
};
