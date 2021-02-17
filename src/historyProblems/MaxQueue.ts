/**2021年2月17日
 * 剑指 Offer 59 - II. 队列的最大值
 */
class MaxQueue {
    constructor() {

    }
    private arr = [];

    private _max = -Infinity;
    max_value(): number {
        if(this.arr.length > 0){
            return this._max;
        }
        return -1;
    }

    push_back(value: number): void {
        if(value > this._max){
            this._max = value;
        }
        this.arr.push(value);
    }

    pop_front(): number {
        if(this.arr.length < 1){
            return -1;
        }
        let value = this.arr.shift();
        if(value == this._max){
            this._max = -Infinity;
            this.arr.forEach((v) =>{
                if(v > this._max){
                    this._max = v;
                }
            });
        }
        return value;
    }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */