"use strict";
/**113. 路径总和 II   剑指 Offer 34. 二叉树中和为某一值的路径
 * 2020年9月26日  第二遍2020年11月15日 12点00分 12点14分
 * DFS 解法
 *
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
function pathSum(root, sum) {
    if (root === null)
        return [];
    let ansArr = [];
    let serach = (node, sum, arr) => {
        let tempArr = [];
        for (let i = 0; i < arr.length; i++) {
            tempArr.push(arr[i]);
        }
        sum = sum - node.val;
        tempArr.push(node.val);
        if (sum == 0 && !node.left && !node.right) {
            // return arr;
            ansArr.push(tempArr);
        }
        if (node.left) {
            serach(node.left, sum, tempArr);
        }
        if (node.right) {
            serach(node.right, sum, tempArr);
        }
    };
    serach(root, sum, []);
    return ansArr;
    // let ansArr = [];
    // if(!root) return ansArr;
    // let getAns = function(node:TreeNode,sum:number,arr:Array<number>){
    //     sum -= node.val;
    //     arr.push(node.val);
    //     if(!node.left && !node.right){
    //         if(sum == 0){
    //             ansArr.push(arr);
    //         }
    //         return;
    //     }
    //     if(node.left){
    //         let newArr:Array<number> = [];
    //         newArr.push(...arr);
    //         getAns(node.left,sum,newArr);
    //     }
    //     if(node.right){
    //         let newArr:Array<number> = [];
    //         newArr.push(...arr);
    //         getAns(node.right,sum,newArr);
    //     }
    // }
    // getAns(root,sum,[]);
    // return ansArr;
}
exports.pathSum = pathSum;
;
