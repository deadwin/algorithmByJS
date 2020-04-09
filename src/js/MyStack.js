//225. 用队列实现栈
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue = [];
    this.topValue = null;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // this.queue.push(x);
    this.topValue = x;

    this.queue.push(x);

};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let size = this.queue.length;
    for(let i = 0;i < size - 1;i ++){
        let x = this.queue.shift();
        this.queue.push(x);
        if(i == size - 2){
            this.topValue = x;
        }
    }
    return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.topValue;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length == 0;
};

/*
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
var obj = new MyStack()
console.log(obj.push(1));
console.log(obj.push(2));
console.log(obj.top());
console.log(obj.pop());
console.log(obj.empty());






