/**941. 有效的山脉数组
 * 2020年11月3日
 * @param A 
 */
export function validMountainArray(A: number[]): boolean {
    //官方解法：线性扫描
    let len = A.length;
    let i = 0;
    while(A[i] < A[i + 1]){
        i ++;
    }
    if(i == 0 || i == len - 1) return false;

    while(A[i] > A[i + 1]){
        i ++;
    }
    return i == len - 1;

    //解法2，遍历和if语句和flag标记
    // if(!A || A.length < 3) return false;
    // let top = A[0];
    // if(top >= A[1]) return false;

    // let topShown = false;
    // for(let i = 1;i< A.length;i ++){
    //     if(A[i] == top){
    //         return false;
    //     }else if(A[i] > top){
    //         if(!topShown){
    //             top = A[i];
    //         }else{
    //             return false;
    //         }
    //     }else{
    //         if(!topShown){
    //             topShown = true;
    //         }
    //         top = A[i];
    //     }
    // }
    // return topShown == true;
};