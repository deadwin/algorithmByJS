/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    //f(n) = max(f(n - 1) + n && true,n) 
    //f(0) = s[i]
    if (!s || s.length == 0)
        return 0;
    let arr = new Array(s.length);
    arr[0] = 1;
    let map = new Map();
    let ans = arr[0];
    map.set(s[0], 0);
    for (let i = 1; i < s.length; i++) {
        if (map.has(s[i])) {
            // arr[i] = 1;
            // map.clear();
            let max = map.get(s[i - 1]);
            let cur = map.get(s[i]);
            let size = map.size;
            let begin = cur - (cur + size - max) + 1;
            for (let j = begin; j <= cur; j++) {
                if (map.get(s[j]) <= cur) {
                    map.delete(s[i]);
                }
            }
            arr[i] = map.size + 1;
        }
        else {
            arr[i] = arr[i - 1] + 1;
        }
        map.set(s[i], i);
        ans = Math.max(arr[i], ans);
    }
    return ans;
};
//"aabaab!bb"
