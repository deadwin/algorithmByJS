"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mirrorTree(root) {
    if (!root)
        return root;
    let func = function (node) {
        let rightNode = node.right;
        node.right = node.left;
        node.left = rightNode;
        if (node.right) {
            func(node.right);
        }
        if (node.left) {
            func(node.left);
        }
    };
    func(root);
    return root;
}
exports.mirrorTree = mirrorTree;
;
//  root ,root.left root.right
