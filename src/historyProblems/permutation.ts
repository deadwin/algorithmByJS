/**剑指 Offer 38. 字符串的排列
 * 2020年11月28日
 * 有空再复习
 * @param s 
 */
function permutation(s: string): string[] {
    let set:Set<string> = new Set();
    let visited = [];
    function dfs(path){
        if(path.length == s.length) return set.add(path);
        for(let i = 0; i < s.length;i ++){
            if(visited[i]) continue;
            visited[i] = true;
            dfs(path + s[i]);
            visited[i] = false;
        }
    }
    dfs("");
    return [...set];
};