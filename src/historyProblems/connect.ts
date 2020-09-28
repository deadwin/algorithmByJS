
/**117. 填充每个节点的下一个右侧节点指针 II
 * 2020年9月29日复习
 * 
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
export interface Node{
     val:any;
     left:Node;
     right:Node;
     next:Node;
}

/**
 * @param {Node} root
 * @return {Node}
 */
export var connect = function(root:Node):Node {
    if(!root) return root;
    let arr = [];
    arr.push(root);
    let size = arr.length;
    let cur:Node;
    let tempArr = [];
    while (size > 0){
        cur = arr.shift();
        size --;
        tempArr.push(cur);
        if(cur.left){
            arr.push(cur.left);
        }
        if(cur.right){
            arr.push(cur.right);
        }
        if(size == 0){
            for(let i = 0; i < tempArr.length - 1;i ++){
                tempArr[i].next = tempArr[i + 1];
            }
            tempArr[tempArr.length - 1].next = null;
            tempArr = [];
            size = arr.length;
        }
    }
    return root;
};