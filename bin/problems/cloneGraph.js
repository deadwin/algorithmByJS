"use strict";
//133. 克隆图
//当前题目存在一定提交疑惑
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
class GraphNode {
    constructor(val, neighbors) {
        this.neighbors = [];
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}
exports.GraphNode = GraphNode;
/**
 * @param {GraphNode} node
 * @return {GraphNode}
 */
exports.cloneGraph = function (node) {
    let visited = new Map();
    const dfs = (node) => {
        if (!node) {
            return node;
        }
        if (visited.has(node.val)) {
            return visited.get(node.val);
        }
        let newNode = new GraphNode(node.val, []);
        visited.set(node.val, newNode);
        for (let i = 0; i < node.neighbors.length; i++) {
            if (visited.has(node.neighbors[i].val)) {
                newNode.neighbors.push(visited.get(node.neighbors[i].val));
            }
            else {
                let b = dfs(node.neighbors[i]);
                newNode.neighbors.push(b);
            }
        }
        return newNode;
    };
    return dfs(node);
};
