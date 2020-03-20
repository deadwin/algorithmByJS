class BFSNode {
    value = null;
    childrens = [];
}
var BFS = function(root: BFSNode, target: BFSNode) {
    var queue: Array < BFSNode > =[];
    var step = 0;
    queue.push(root);
    while (queue.length > 0) {
        step++;
        var len = queue.length;
        for (let i = 0; i < len; i++) {
            var node: BFSNode = queue[0];
            if (node.value == target.value) {
                return true;
            }
            for (let j = 0; j < node.childrens.length; j++) {
                queue.push(node.childrens[j]);
            }
            queue.shift();
        }
    }
}
let node = new BFSNode();