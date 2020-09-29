/**剑指 Offer 09. 用两个栈实现队列
 * 2020年9月30日
 * TIP：不能漏掉一些判断条件
 */
export declare class CQueue {
    private stack1;
    private stack2;
    constructor();
    appendTail(value: number): void;
    deleteHead(): number;
}
/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */ 
