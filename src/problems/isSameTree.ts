export class TreeNode{
    val:number = 0;
    left:TreeNode = null;
    right:TreeNode = null;
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**144. 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root:TreeNode) {
    let result = [];
    if(!root){
        return result;
    }
    let stack = [];
    stack.push(root);
    while(stack.length > 0){
        let node = <TreeNode>stack.pop();
        result.push(node.val);
        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }
    return result;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root:TreeNode) {
    let result = [];
    if(!root){
        return result;
    }
    let stack:Array<TreeNode> = [];


    let node = root;
    while(node || stack.length > 0){
        if(node){
            stack.push(node);
            node = node.left;
        }else{
            let flag = stack[stack.length - 1];
            stack.pop();
            result.push(flag.val);
            node = flag.right;
        }
    }

    

    return result;
};
