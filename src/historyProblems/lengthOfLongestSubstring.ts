/**剑指 Offer 48. 最长不含重复字符的子字符串
 * 2020年10月16日
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s: string): number {
    return sol2(s);
};

function sol1(s: string) {
    if (!s || s.length == 0) return 0;
    let arr = new Array(s.length);
    arr[0] = 1;
    let map = new Map();
    let ans = arr[0];
    map.set(s[0], 0);
    for (let i = 1; i < s.length; i++) {
        if (map.has(s[i])) {
            let max = map.get(s[i - 1]);
            let cur = map.get(s[i]);
            let size = map.size;
            let begin = cur - (cur + size - max) + 1;
            for (let j = begin; j < cur; j++) {
                if (map.get(s[j]) <= cur) {
                    map.delete(s[j]);
                }
            }
            arr[i] = map.size;
        } else {
            arr[i] = arr[i - 1] + 1;
        }
        map.set(s[i], i);
        ans = Math.max(arr[i], ans);
    }
    return ans;
}
//"aabaab!bb"

function sol2(s: string) {
    let max = 0;
    let left = 0;
    /**
        a b b a
     */
    let len = s.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
        if (map.has(s[i])) {
            left = Math.max(left, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - left + 1);
    }
    return max;
}