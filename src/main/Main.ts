

var buildNext = (p:string) =>{
    let m = p.length;
    let j =  0;
    let n = new Array(m);
    n[0] = -1;
    let t = n[0];

    while(j < m - 1){

        if((t < 0) || p[j] == p[t]){
            j ++;
            t ++;
            n[j] = t;
        }else{
            t = n[t];
        }
    }
    console.log(n,"n")
    return n;
}

var match = (text:string,str:string){
    let next = buildNext(str);
    console.log(next);
    let m = text.length,i = 0;
    let n = str.length,j = 0;
    while(j < n && i < m){
        if(0 > j || text[i] == str[j]){
            i ++;
            j ++;
        }else{
            j = next[j];
        }
    }

    return i -j;
}

console.log(match("abcbbacerebcbaaavvv","abcbaa"));