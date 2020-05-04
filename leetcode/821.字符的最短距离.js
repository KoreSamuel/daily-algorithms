/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  const indexC = []; // 记录C在S中的每个位置
  const res = [];
  let i = 0;
  for (i = 0; i < S.length; i++) {
    if (S[i] === C) {
      indexC.push(i);
    }
  }
  for (i = 0; i < S.length; i++) {
    res.push(Math.min(...indexC.map(ic => Math.abs(ic - i))))
  }
  return res;
};
// @lc code=end

