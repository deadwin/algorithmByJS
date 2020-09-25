/**剑指 Offer 05. 替换空格
 * 2020年9月26日
 * 大家都用的正则？？？不过确实正则简单
 *
 * 纪念自己的lc第100道题，到现在没睡觉就是因为10分钟前做第99道
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            str += "%20";
        }
        else {
            str += s[i];
        }
    }
    return str;
};
