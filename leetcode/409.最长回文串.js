/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hash = {};
  let len = 0;
  const temp = [];
  for (const c of s) {
    if (!hash[c]) {
      hash[c] = 1;
      temp.push(c);
    } else if (hash[c] === 1) {
      hash[c] = undefined;
      let idx = temp.indexOf(c);
      temp.splice(idx, 1)
      len += 2;
    }
  }
  return temp.length ? len + 1 : len;
};
// @lc code=end

