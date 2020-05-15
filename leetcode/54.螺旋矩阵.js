/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  if (!m) return [];
  const n = matrix[0].length;
  let t = 0, r = n - 1, b = m - 1; l = 0;
  let res = [];
  while (res.length <= m * n) {
    for (let i = l; i <= r; i++) res.push(matrix[t][i]);
    t++;
    if (res.length === m * n) break;
    for (let i = t; i <= b; i++) res.push(matrix[i][r]);
    r--;
    if (res.length === m * n) break;
    for (let i = r; i >= l; i--) res.push(matrix[b][i]);
    b--;
    if (res.length === m * n) break;
    for (let i = b; i >= t; i--) res.push(matrix[i][l]);
    l++;
    if (res.length === m * n) break;
  }
  return res;
};
// @lc code=end

