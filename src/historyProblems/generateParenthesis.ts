/**22. 括号生成 2022年3月25日
 * 
 * 一遍过hh,添加了解法2，剪枝操作
 * @param n  1 <= n <= 8
 * @returns 
 */
export function generateParenthesis(n: number): string[] {
    if (!n || Math.floor(n) !== n) {
        console.log("err");
        return [];
    }
    let set = [];
    function generate(t: number): string[] {
        // count++;
        if (set[t]) return set[t];
        let ans: string[] = [];
        if (t == 0) {
            ans.push("");
        }
        for (let i = 0; i < t; i++) {
            let temp = generate(i);
            for (let j = 0; j < temp.length; j++) {
                let left = temp[j];
                let rightTemp = generate(t - 1 - i);
                for (let k = 0; k < rightTemp.length; k++) {
                    ans.push("(" + left + ")" + rightTemp[k]);
                }
            }
        }
        set[t] = ans;
        return ans;
    }
    return generate(n);
};