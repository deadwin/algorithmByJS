/**剑指 Offer 27. 二叉树的镜像
 * 2020年11月14日
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
declare class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}

export function mirrorTree(root: TreeNode | null): TreeNode | null {
    if(!root) return root;
    let func = function(node:TreeNode){
        let rightNode = node.right;
        node.right = node.left;
        node.left = rightNode;
        if(node.right){
            func(node.right);
        }
        if(node.left){
            func(node.left);
        }
    }
    func(root);
    return root;
};

//  root ,root.left root.right