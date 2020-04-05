//200. 岛屿数量

interface PosIndex{
    x:number,
    y:number
}

//广度优先解法，BFS
/**
 * @param {character[][]} grid
 * @return {number}
 */
export var numIslands = function(grid:string[][]) {
    var result = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                result++;
                var queue:Array<PosIndex> = [];
                let posIndex:PosIndex = {x:i, y:j};
                queue.push(posIndex);
                while (queue.length > 0) {
                    var curArr = queue[0];
                    queue.shift();
                    var x = curArr.x;
                    var y = curArr.y;
                    if (grid[x][y] === '1') {
                        grid[x][y] = '0';
                        if (x > 0 && grid[x - 1][y] === '1') {
                            queue.push({x:x - 1,y : y})
                        }
                        if ((x < (grid.length - 1)) && grid[x + 1][y] === '1') {
                            queue.push({x:x + 1,y : y})
                        }
                        if (y > 0 && grid[x][y - 1] === '1') {
                            queue.push({x: x,y : y - 1})
                        }
                        if ((y < grid[x].length - 1) && grid[x][y + 1] === '1') {
                            queue.push({x:x,y : y + 1})
                        }
                    }
                }
            }
        }
    }
    return result;
};


//  深度优先解法
/**
 * @param {character[][]} grid
 * @return {number}
 */
export var numIslandsDFS = function(grid:string[][]) {
    let visited:Map<number,number> = new Map();
    

    const DFS = function(){
        
    }
    let posList:Array<PosIndex> = [];

    
    for(let i = 0;i < grid.length;i ++){
        let subGird = grid[i];

        for(let j = 0;j < subGird.length;j ++){
            let pos:PosIndex = {x : i,y : j};
            // if(visited.)


            if(grid[pos.x][pos.y] == "1"){
                
            }
        }
    }

    

};