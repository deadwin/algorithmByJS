/**剑指 Offer 58 - II. 左旋转字符串
 * 2020年10月10日
 * @param s 
 * @param n 
 */
export function reverseLeftWords(s: string, n: number): string {
    // for(let i = 0;i < n;i ++){
    //     s += s[i];
    // }
    return s.slice(n) + s.slice(0,n);
};