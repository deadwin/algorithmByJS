//133. 克隆图
//当前题目存在一定提交疑惑

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
export class GraphNode{
    constructor(val,neighbors){
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
    public val:number;
    public neighbors:GraphNode[] = [];
}

/**
 * @param {GraphNode} node
 * @return {GraphNode}
 */
export var cloneGraph = function(node:GraphNode):GraphNode {
    let visited:Map<number,GraphNode> = new Map();
    const dfs = (node)=>{
        if(!node){
            return node;
        }
        if(visited.has(node.val)){
            return visited.get(node.val);
        }
        let newNode = new GraphNode(node.val,[]);
        visited.set(node.val,newNode);
    
        for(let i = 0;i < node.neighbors.length;i ++){
            if(visited.has(node.neighbors[i].val)){
                newNode.neighbors.push(visited.get(node.neighbors[i].val));
            }else{
                let b = dfs(node.neighbors[i]);
                newNode.neighbors.push(b);
            }
        }
        return newNode;
    }
    
    return dfs(node);
};

// let createGraphNode = function(value):GraphNode{
//     let item = new GraphNode(value,[]);
//     return item;
// }


// let graphNode1 = createGraphNode(1);
// let graphNode2 = createGraphNode(2);
// let graphNode3 = createGraphNode(3);
// let graphNode4 = createGraphNode(4);
// graphNode1.neighbors.push(graphNode2);
// graphNode1.neighbors.push(graphNode4);
// graphNode2.neighbors.push(graphNode1);
// graphNode2.neighbors.push(graphNode3);
// graphNode3.neighbors.push(graphNode2);
// graphNode3.neighbors.push(graphNode4);
// graphNode4.neighbors.push(graphNode1);
// graphNode4.neighbors.push(graphNode3);
