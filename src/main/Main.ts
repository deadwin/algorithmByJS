import { kClosest } from "../historyProblems/kClosest";
import { movingCount } from "../historyProblems/movingCount";
import { relativeSortArray } from "../historyProblems/relativeSortArray";
import { TreeNode } from "../problems/isSameTree";
import { levelOrder_3 } from "../problems/levelOrder_3";
let a = new TreeNode();
a.val = 3;
a.left = new TreeNode();
a.left.val = 9;
a.right = new TreeNode();
a.right.val =20;
let b = a.right;
b.left = new TreeNode();
b.left.val = 15;
b.right = new TreeNode();
b.right.val =7;

console.log(levelOrder_3(a))