/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function(strs) {
  let first = strs[0];
  let rst = "";
  if (!strs.length) {
    return rst;
  }
  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (first[i] != strs[j][i]) {
        return rst;
      }
    }
    rst += first[i];
  }
  return rst;
};
