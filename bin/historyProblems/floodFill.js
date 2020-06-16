"use strict";
/**733 图像渲染 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
exports.floodFill = function (image, sr, sc, newColor) {
    let curClr = image[sr][sc];
    if (curClr == newColor) {
        return image;
    }
    let arr = [];
    arr.push({ sr: sr, sc: sc });
    image[sr][sc] = newColor;
    while (arr.length > 0) {
        let curData = arr.pop();
        let sr = curData.sr;
        let sc = curData.sc;
        //上
        if (sr > 0 && image[sr - 1][sc] == curClr) {
            image[sr - 1][sc] = newColor;
            arr.push({ sr: sr - 1, sc: sc });
        }
        //下
        if (sr < (image.length - 1) && image[sr + 1][sc] == curClr) {
            image[sr + 1][sc] = newColor;
            arr.push({ sr: sr + 1, sc: sc });
        }
        //左
        if (sc > 0 && image[sr][sc - 1] == curClr) {
            image[sr][sc - 1] = newColor;
            arr.push({ sr: sr, sc: sc - 1 });
        }
        //右
        if (sc < (image[0].length - 1) && image[sr][sc + 1] == curClr) {
            image[sr][sc + 1] = newColor;
            arr.push({ sr: sr, sc: sc + 1 });
        }
    }
    return image;
};
