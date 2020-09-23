/**88. 合并两个有序数组
 * 2020年9月23日
 Do not return anything, modify nums1 in-place instead.
 */
export function merge_88(nums1: number[], m: number, nums2: number[], n: number): void {
    nums2.slice(n)
    nums1.splice(m)
    Array.prototype.push.apply(nums1, nums2);
    nums1.sort((a,b) =>{
        if(a < b) return -1;
        else if(a == b) return 0;
        else return 1;
    });
};