

let str = "civilwartestingwhetherthatnaptionoranynartionsoco\
nceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometo\
dedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatn\
ationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedi\
catewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledhe\
rehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotleno\
rlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrath\
ertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainin\
gbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolv\
ethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthep\
eopleshallnotperishfromtheearth"
// // console.log(longestPalindrome
// //     (str));
// console.log(str.length)


// let arr = [45,100,25,10];

//  f(n) = Math.min(f(n - item[0]) + 1,f(n - item[1]) + 1 ..., f(n - item[item.length - 1]) + 1);

/**
 * 
 *f[i][j] = s[i] == s[j] && f[i + 1][j - 1] == true
 *if(j - i == 0)  f[i][j] = true;
  else if(j - i == 1) f[i][j] = s[i] == s[j]
 * 
 **/

let func = (s:string) =>{
    if(s.length < 2) return s;

    let dp = new Array(s.length);
    for(let i = 0; i < s.length; i++){
        dp[i] = new Array(s.length);
    }
    for(let i = 0;i < s.length;i ++){
        dp[i][i] = true;
    }
    let ans = ""
    for(let i = dp.length - 1;i >= 0;i --){
        for(let j = i;j < dp.length;j ++){
            if(j - i == 1){
                dp[i][j] = s[i] == s[j];
            }else{
                dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j];
            }
            if(dp[i][j] == true && (j - i) >= ans.length){
                ans = s.substr(i,j - i + 1);
            }
        }
    }
    return ans;
}

func(str)



// console.log(str.sl);
// let arr = [1,2,3];
// console.log(str.splice(1,1))