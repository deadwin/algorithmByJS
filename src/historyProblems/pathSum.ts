/**113. 路径总和 II
 * 2020年9月26日
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

import { TreeNode } from "../problems/isSameTree"

export function pathSum(root: TreeNode | null, sum: number): number[][] {
    if(root === null) return [];
    let ansArr= [];

    let serach = (node:TreeNode,sum:number,arr:number[]) => {
        let tempArr = [];
        for(let i = 0;i < arr.length;i ++){
            tempArr.push(arr[i]);
        }
        sum = sum - node.val;
        tempArr.push(node.val);
        if(sum == 0 && !node.left && !node.right){
            // return arr;
            ansArr.push(tempArr);
        }
        if(node.left){
            serach(node.left,sum,tempArr);
        }
        if(node.right){
            serach(node.right,sum,tempArr);
        }
    }
    serach(root,sum,[]);
    return ansArr;
};