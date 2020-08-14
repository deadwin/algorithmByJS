declare let str: string;
/**
 *
 *f[i][j] = s[i] == s[j] && f[i + 1][j - 1] == true
 *if(j - i == 0)  f[i][j] = true;
  else if(j - i == 1) f[i][j] = s[i] == s[j]
 *
 **/
declare let func: (s: string) => string;
