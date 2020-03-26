// //279. 完全平方数

// /**
//  * @param {number} n
//  * @return {number}
//  */
export var numSquares = function(n:number) {
    let que = [n];
    let visited:Set<number> = new Set();
    let depth = 0;
    while(que.length > 0){
        depth ++;
        let len = que.length;
        for(let i = 0;i < len;i ++){
            let cur = <number>que.pop();
            for(let j = 1; j * j <= cur;j ++){
                let temp = cur - j * j;
                if(temp == 0){
                    return depth;
                }
                if(!visited.has(temp)){
                    visited.add(temp);
                    que.unshift(temp);
                }
            }
        }
    }
    return depth;
}


