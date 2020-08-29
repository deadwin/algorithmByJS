//155. 最小栈
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = []
};
MinStack.prototype.arr = []


/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.arr.length == 0){
        return null;
    }
    return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.arr.length == 0){
        return 0;
    }
    let minNum = this.arr[0];
    for(let i = 1;i < this.arr.length ;i ++){
        if(this.arr[i] < minNum){
            minNum = this.arr[i];
        }
    }
    return minNum;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//  exports.MinStack = MinStack();