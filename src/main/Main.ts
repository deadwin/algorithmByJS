import { kClosest } from "../historyProblems/kClosest";
import { movingCount } from "../historyProblems/movingCount";
import { relativeSortArray } from "../historyProblems/relativeSortArray";
import { TreeNode } from "../problems/isSameTree";

/**
 * 12点00分 12点14分
 * @param root 
 * @param sum 
 */
function pathSum(root: TreeNode | null, sum: number): number[][] {
    let ansArr = [];
    if(!root) return ansArr;
    let getAns = function(node:TreeNode,sum:number,arr:Array<number>){
        sum -= node.val;
        arr.push(node.val);
        if(!node.left && !node.right){
            if(sum == 0){
                ansArr.push(arr);
            }
            return;
        }
        if(node.left){
            let newArr:Array<number> = [];
            newArr.push(...arr);
            getAns(node.left,sum,newArr);
        }
        if(node.right){
            let newArr:Array<number> = [];
            newArr.push(...arr);
            getAns(node.right,sum,newArr);
        }
    }
    getAns(root,sum,[]);
    return ansArr;
};