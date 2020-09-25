/**
 * 384. 打乱数组
 * 2020年9月25日
 * 
 * TODO Fisher-Yates 洗牌算法
 */
export class Solution_384 {
    constructor(nums: number[]) {
        
        for(let i = 0;i < nums.length;i ++){
            this.nums.push(nums[i]);
            this.temp.push(nums[i]);
        }
    }
    private nums = [];
    private temp:number[] = [];

    reset(): number[] {
        for(let i = 0;i < this.nums.length;i ++){
            this.temp.push(this.nums[i]);
        }
        return this.temp;
    }

    shuffle(): number[] {
        let ans:number[] = [];
        this.reset();
        while (ans.length < this.nums.length){
            let randNum =  Math.floor(Math.random() * this.temp.length);
            ans.push(this.temp[randNum]);
            this.temp.splice(randNum,1)
        }
        return ans;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */