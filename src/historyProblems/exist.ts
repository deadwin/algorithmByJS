/**剑指 Offer 12. 矩阵中的路径
 * 2020年11月5日
 * @param board 
 * @param word 
 */
export function exist(board: string[][], word: string): boolean {
    let dfs = function(i,j,board,index){
        if(i < 0 || i >= board.length || j < 0 || j >= board[i].length){
            return false;
        }
        let cur = index;
        if(board[i][j] != "/" && board[i][j] == word[index]){
            board[i][j] = "/";
            index ++;
            if(index == word.length){
                return true;
            }
        }else{
            return false;
        }
        let ret = dfs(i + 1,j,board,index) || dfs(i - 1,j,board,index) || dfs(i,j + 1,board,index) || dfs(i,j - 1,board,index);
        board[i][j] = word[cur];
        return ret;
    }
    for(let i = 0;i < board.length;i ++){
        for(let j = 0;j < board[i].length;j ++){
            if(board[i][j] == word[0]){
                if(dfs(i,j,board,0) == true){
                    return true;
                }
            }
        }
    }
    return false;
};