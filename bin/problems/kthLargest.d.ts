declare class KthLargest {
    private stack;
    constructor(k: number, nums: number[]);
    add(val: number): number;
}
declare class MinHeap {
    private data;
    private comparator;
    constructor(data?: any[]);
    private heapify;
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */ 
