"use strict";
/*
 * @lc app=leetcode.cn id=973 lang=typescript
 *2020年11月9日：系统api  2020年11月13日快速排序求k大，时间复杂度O(n)
 
 * [973] 最接近原点的 K 个点
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.kClosest = void 0;
function distance(point) {
    return point[0] * point[0] + point[1] * point[1];
}
//   3 1 5 4 8 9 7 6
//     lr          
//   1 3 5 4 8 9 7 6
//   r   l  
function quickSelect(points, start, end, K) {
    let pStart = points[start];
    const pivot = distance(pStart);
    let l = start, r = end;
    while (l < r) {
        while (l < r && distance(points[r]) >= pivot) {
            r--;
        }
        if (l < r) {
            points[l] = points[r];
            l++;
        }
        while (l < r && distance(points[l]) < pivot) {
            l++;
        }
        if (l < r) {
            points[r] = points[l];
            r--;
        }
    }
    points[l] = pStart;
    if (l == K) {
    }
    else if (l < K) {
        quickSelect(points, l + 1, end, K);
    }
    else {
        quickSelect(points, start, r - 1, K);
    }
}
// @lc code=start
function kClosest(points, K) {
    if (points.length <= K) {
        return points;
    }
    quickSelect(points, 0, points.length - 1, K);
    // console.log(points)
    return points.slice(0, K);
    //使用了系统排序，也是一种通用速解
    // let distansArr:Array<{index:number,distance:number}> = [];
    // points.forEach((value,index) =>{
    //     distansArr.push(
    //         {index:index,
    //         distance:Math.sqrt(Math.pow(value[0],2) + Math.pow(value[1],2))
    //     }
    //     );
    // });
    // distansArr.sort((a,b) =>{
    //     if(a.distance > b.distance){
    //         return 1;
    //     }else if(a.distance < b.distance){
    //         return -1;
    //     }
    //     return 0;
    // });
    // let temp = distansArr.slice(0,K);
    // let ans = [];
    // for(let i = 0;i < temp.length;i ++){
    //     ans.push(points[temp[i].index]);
    // }
    // return ans;
}
exports.kClosest = kClosest;
;
// @lc code=end
