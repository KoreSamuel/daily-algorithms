/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let lens = s.length;
  let lent = t.length;
  let i = j = 0;
  while (i < lens && j < lent) {
      if (s[i] === t[j]) {
          i++;
      }
      j++;
  }
  return i === lens;
};
// @lc code=end

