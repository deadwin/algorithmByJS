"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function levelOrder_2(root) {
    let ansArr = [];
    if (!root)
        return ansArr;
    let node;
    let nodeArr = [];
    nodeArr.push(root);
    while (nodeArr.length > 0) {
        node = nodeArr.shift();
        ansArr.push(node.val);
        if (node.left) {
            nodeArr.push(node.left);
        }
        if (node.right) {
            nodeArr.push(node.right);
        }
    }
    return ansArr;
}
;
