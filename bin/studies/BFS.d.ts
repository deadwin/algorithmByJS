declare class BFSNode {
    value: null;
    childrens: never[];
}
declare var BFS: (root: BFSNode, target: BFSNode) => true | undefined;
declare let node: BFSNode;
