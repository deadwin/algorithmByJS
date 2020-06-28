/**56. 合并区间 */
export function merge(intervals: number[][]): number[][] {

    intervals.sort((a, b) => a[0] - b [0]);
    
    for(let i = 0;i < intervals.length - 1;i ++){
        let end = intervals[i][1];
        for(let j = i + 1;j < intervals.length;){
            let sbegin = intervals[j][0];
            let send = intervals[j][1];
            if(sbegin <= end){
                end = send > end ? send : end;
                intervals[i][1] = end;
                intervals.splice(j,1);
            }else{
                j ++;
            }
        }
    }
    return intervals;
};