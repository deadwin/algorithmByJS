/**22. 括号生成 2022年3月25日
 * 
 * 一遍过hh
 * @param n  1 <= n <= 8
 * @returns 
 */
export function generateParenthesis(n: number): string[] {
    if (!n || Math.floor(n) !== n) {
        console.log("err");
        return [];
    }
    let ansArr = [];
    function t(a: string, curNum: number, needRightNum: number) {
        // console.log(a, curNum, needRightNum);
        if (curNum < n) {
            if (curNum > needRightNum) {
                let c = a + "(";
                let b = a + ")";
                t(c, curNum + 1, needRightNum);
                t(b, curNum, needRightNum + 1);
            } else {
                a += "(";
                t(a, curNum + 1, needRightNum);
            }
        } else {
            while (needRightNum < curNum) {
                a += ")";
                needRightNum += 1;
            }
            ansArr.push(a);
        }

    }
    t("", 0, 0);
    // console.log(ansArr);
    return ansArr;
};