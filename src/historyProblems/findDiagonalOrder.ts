

/**
 * 对角线遍历
 * @param matrix 
 */

export function findDiagonalOrder(matrix: number[][]): number[] {
    let arr = [];
    if(!matrix || matrix.length == 0) return arr;
    let len = matrix[0].length - 1 + matrix.length;

    for(let sum = 0;sum < len;sum ++){
        if(sum % 2 == 0){
            let startY = sum;
            let startX = 0;
            if(sum >= matrix.length){
                startY = matrix.length - 1;
                startX = sum - matrix.length + 1;
            }
            let endX = sum >= matrix[0].length ? matrix[0].length - 1 : sum;
            while(startY >= 0 && startX <= endX){
                arr.push(matrix[startY][startX]);

                startY --;
                startX ++;
            }
        }else{
            let startY = sum;
            let startX = 0;
            if(sum >= matrix[0].length){
                startY = matrix[0].length - 1;
                startX = sum - matrix[0].length + 1;
            }
            let endX = sum >= matrix.length ? matrix.length - 1 : sum;
            while(startY >= 0 && startX <= endX){
                // arr.push({startX,startY});
                arr.push(matrix[startX][startY]);
                startY --;
                startX ++;
            }
        }
    }
    // console.log(arr);
    return arr;
};



/**
 * 原理理解图
 * 
 */
findDiagonalOrder1([
    ["00","01",'02','03','04','05','06'],
    ["10","11",'12','13','14','15','16'],
    ["20","21",'22','23','24','25','26'],
]);




/**
 * 对角线遍历原理理解
 * @param matrix 
 */

function findDiagonalOrder1(matrix: any[][]): number[] {
    let arr = [];
    if(!matrix || matrix.length == 0) return arr;
    let len = matrix[0].length - 1 + matrix.length;

    for(let sum = 0;sum < len;sum ++){
        /**从下到上 */
        if(sum % 2 == 0){
            let startY = sum;
            let startX = 0;
            if(sum >= matrix.length){
                startY = matrix.length - 1;
                startX = sum - matrix.length + 1;
            }
            let endX = sum >= matrix[0].length ? matrix[0].length - 1 : sum;

            console.log(startX,startY,endX,"从下到上");
            while(startY >= 0 && startX <= endX){
                arr.push({startY,startX});
                startY --;
                startX ++;
            }
        }else{
            let startY = sum;
            let startX = 0;
            if(sum >= matrix[0].length){
                startY = matrix[0].length - 1;
                startX = sum - matrix[0].length + 1;
            }
            let endX = sum >= matrix.length ? matrix.length - 1 : sum;
            console.log(startX,startY,endX,"从上到下");

            while(startY >= 0 && startX <= endX){
                arr.push({startX,startY});
                startY --;
                startX ++;
            }
        }
    }
    console.log(arr);
    return arr;
};