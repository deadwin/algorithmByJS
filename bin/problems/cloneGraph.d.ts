/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
export declare class GraphNode {
    constructor(val: any, neighbors: any);
    val: number;
    neighbors: GraphNode[];
}
/**
 * @param {GraphNode} node
 * @return {GraphNode}
 */
export declare var cloneGraph: (node: GraphNode) => GraphNode;
