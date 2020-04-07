"use strict";
// import { numSquares } from "../problems/numSquares";
Object.defineProperty(exports, "__esModule", { value: true });
const cloneGraph_1 = require("../problems/cloneGraph");
// import { evalRPN } from "../historyProblems/evalRPN";
// import { MinStack } from "../problems/MinStack";
// console.log(numSquares(12))
// let minStack = new MinStack();
// console.log(isValid("{}()[]{[]}"))
// evalRPN(["4","13","5","/","+"])
let createGraphNode = function (value) {
    let item = new cloneGraph_1.GraphNode(value, []);
    return item;
};
let graphNode1 = createGraphNode(1);
let graphNode2 = createGraphNode(2);
let graphNode3 = createGraphNode(3);
let graphNode4 = createGraphNode(4);
graphNode1.neighbors.push(graphNode2);
graphNode1.neighbors.push(graphNode4);
graphNode2.neighbors.push(graphNode1);
graphNode2.neighbors.push(graphNode3);
graphNode3.neighbors.push(graphNode2);
graphNode3.neighbors.push(graphNode4);
graphNode4.neighbors.push(graphNode1);
graphNode4.neighbors.push(graphNode3);
console.log(graphNode1);
let node = cloneGraph_1.cloneGraph(graphNode1);
console.log('============');
console.log(node);
