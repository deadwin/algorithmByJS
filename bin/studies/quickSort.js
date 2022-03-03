"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
/**2020年9月21日
 * 一个未优化的快速排序
 * 快速排序
 * @param arr
 */
var quickSort = function (arr) {
    let swap = function (arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };
    let partition = function (arr, start, end) {
        let prvotKey = arr[start];
        while (start < end) {
            while (start < end && arr[end] >= prvotKey) {
                end--;
            }
            console.log(start, end, "aaaa", arr);
            swap(arr, start, end);
            while (start < end && arr[start] <= prvotKey) {
                start++;
            }
            console.log(start, end, "bbbb", arr);
            swap(arr, start, end);
        }
        return start;
    };
    let qSort = (arr, start, end) => {
        let pivot;
        if (start < end) {
            pivot = partition(arr, start, end);
            console.log(pivot, "pivot");
            qSort(arr, start, pivot - 1);
            qSort(arr, pivot + 1, end);
        }
    };
    qSort(arr, 0, arr.length - 1);
};
exports.quickSort = quickSort;
