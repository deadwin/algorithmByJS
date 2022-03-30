/**852. 山脉数组的峰顶索引 2022年3月31日
 * 就是简单的二分法
 * @param arr 
 * @returns 
 */
function peakIndexInMountainArray(arr: number[]): number {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let cur = arr[mid];
        let lower = arr[mid - 1];
        let larger = arr[mid + 1];
        if (cur > lower && cur > larger) {
            return mid;
        } else if (cur < lower) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
};