class KthLargest {
    constructor(k, nums) {
        this.stack = null;
        this.stack = new Array(nums.length);
    }
    add(val) {
    }
}
class MinHeap {
    constructor(data = []) {
        this.data = null;
        this.data = data;
        this.comparator = (a, b) => a - b;
    }
    heapify() {
    }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */ 
