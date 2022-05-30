/**剑指 Offer 51. 数组中的逆序对  2022年3月28日，没看懂
 * 太难了
 * @param nums
 * @returns
 */
function reversePairs(nums) {
    let tmp = [];
    return mergeSort(0, nums.length - 1, nums, tmp);
}
;
function mergeSort(l, r, nums, tmp) {
    if (l >= r)
        return 0;
    let m = Math.floor((l + r) / 2);
    let res = mergeSort(l, m, nums, tmp) + mergeSort(m + 1, r, nums, tmp);
    let i = l, j = m + 1;
    for (let k = l; k <= r; k++) {
        tmp[k] = nums[k];
    }
    for (let k = l; k <= r; k++) {
        if (i == m + 1) {
            nums[k] = tmp[j];
            j += 1;
        }
        else if (j == r + 1 || tmp[i] <= tmp[j]) {
            nums[k] = tmp[i];
            i++;
        }
        else {
            nums[k] = tmp[j];
            j++;
            res += m - i + 1;
        }
    }
    return res;
}
