"use strict";
/**剑指 Offer 09. 用两个栈实现队列
 * 2020年9月30日
 * TIP：不能漏掉一些判断条件
 */
// let cq =new CQueue();
// cq.appendTail(1);
// cq.appendTail(2);
// cq.appendTail(3);
// console.log(cq.deleteHead());
// cq.appendTail(4);
Object.defineProperty(exports, "__esModule", { value: true });
exports.CQueue = void 0;
// console.log(cq.deleteHead());
// console.log(cq.deleteHead());
// console.log(cq.deleteHead());
class CQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        this.stack1 = [];
        this.stack2 = [];
    }
    appendTail(value) {
        if (this.stack1.length == 0 && this.stack2.length == 0) {
            this.stack1.push(value);
        }
        else {
            if (this.stack1.length > 0) {
                this.stack2.push(value);
            }
            else {
                while (this.stack2.length > 0) {
                    this.stack1.push(this.stack2.pop());
                }
                this.stack2.push(value);
            }
        }
    }
    deleteHead() {
        if (this.stack1.length == 0) {
            if (this.stack2.length == 0) {
                return -1;
            }
            else {
                while (this.stack2.length > 0) {
                    this.stack1.push(this.stack2.pop());
                }
                return this.stack1.pop();
            }
        }
        else {
            return this.stack1.pop();
        }
    }
}
exports.CQueue = CQueue;
/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */ 
