/**
 * 349. 两个数组的交集
 * 2020年11月2日
 * @param nums1 
 * @param nums2 
 */
export function intersection(nums1: number[], nums2: number[]): number[] {

    let set = new Set();
    for(let i = 0;i < nums1.length;i ++){
        if(!set.has(nums1[i])){
            set.add(nums1[i]);
        }
    }

    let ret:Set<number> = new Set();
    for(let i = 0;i < nums2.length;i ++){
        if(set.has(nums2[i])){
            if(!ret.has(nums2[i])){
                ret.add(nums2[i]);
            }
        }
    }
    return Array.from(ret);
};