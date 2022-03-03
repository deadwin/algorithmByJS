/**
 * 剑指 Offer 33. 二叉搜索树的后序遍历序列
 * 
 * @param postorder 
 * @returns 
 */
function verifyPostorder(postorder: number[]): boolean {
    let stack = [];
    let root = Number.MAX_VALUE;
    for (let i = postorder.length - 1; i >= 0; i--) {
        let cur = postorder[i];
        if (cur > root) return false;
        while (stack.length > 0 && stack[stack.length - 1] > cur) {
            root = stack.pop();
        }
        stack.push(cur);
    }
    return true;
};
