/**剑指 Offer 32 - I. 从上到下打印二叉树
 * 2020年11月15日   感觉是简单难度
 */
import { TreeNode } from "../problems/isSameTree";
function levelOrder_2(root: TreeNode | null): number[] {
    let ansArr = [];
    if(!root) return ansArr;
    let node:TreeNode;
    let nodeArr = [];
    nodeArr.push(root);
    while(nodeArr.length > 0){
        node = nodeArr.shift();
        ansArr.push(node.val);
        if(node.left){
            nodeArr.push(node.left);
        }
        if(node.right){
            nodeArr.push(node.right);
        }
    }
    return ansArr;
};