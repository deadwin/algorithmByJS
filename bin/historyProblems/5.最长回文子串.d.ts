/**
 * dp[i][j] =  s[i] == s[j] && dp[i + 1][j - 1] == true
 *
 *
 * dp[i][i] = true;
 * dp[i][i + 1] = s[i] == s[i + 1];
 *
 *
 *
 */
export declare function longestPalindrome(s: string): string;
