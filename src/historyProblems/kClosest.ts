/*
 * @lc app=leetcode.cn id=973 lang=typescript
 *2020年11月9日
 使用了系统排序，也是一种通用速解
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
export function kClosest(points: number[][], K: number): number[][] {
    let distansArr:Array<{index:number,distance:number}> = [];
    points.forEach((value,index) =>{
        distansArr.push(
            {index:index,
            distance:Math.sqrt(Math.pow(value[0],2) + Math.pow(value[1],2))
        }
        );
    });
    distansArr.sort((a,b) =>{
        if(a.distance > b.distance){
            return 1;
        }else if(a.distance < b.distance){
            return -1;
        }
        return 0;
    });
    let temp = distansArr.slice(0,K);
    // console.log(distansArr)
    let ans = [];
    for(let i = 0;i < temp.length;i ++){
        ans.push(points[temp[i].index]);
    }
    return ans;
};
// @lc code=end

