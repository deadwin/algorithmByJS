/**389. 找不同　2022年3月30日
 *
 * @param s
 * @param t
 * @returns
 */
function findTheDifference(s, t) {
    return fsol1(s, t);
}
;
/**解法1,使用哈希 */
function fsol1(s, t) {
    let len = s.length;
    let set = {};
    for (let i = 0; i < len; i++) {
        let s1 = s[i];
        let s2 = t[i];
        if (set[s1]) {
            set[s1] = false;
        }
        else {
            set[s1] = true;
        }
        if (set[s2]) {
            set[s2] = false;
        }
        else {
            set[s2] = true;
        }
    }
    let last = t[len];
    if (set[last]) {
        set[last] = false;
    }
    else {
        return last;
    }
    for (let v in set) {
        if (set[v]) {
            return v;
        }
    }
}
