class KthLargest {
    private stack: Array<number> = null;
    constructor(k: number, nums: number[]) {
        this.stack = new Array(nums.length);
    }

    add(val: number): number {

    }
}

class MinHeap {
    private data: Array<number> = null;
    private comparator: Function;

    constructor(data = []) {
        this.data = data;
        this.comparator = (a, b) => a - b;
    }

    private heapify() {

    }
}



/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */