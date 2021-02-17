/**2021年2月17日
 * 剑指 Offer 59 - II. 队列的最大值
 */
declare class MaxQueue {
    constructor();
    private arr;
    private _max;
    max_value(): number;
    push_back(value: number): void;
    pop_front(): number;
}
/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */ 
