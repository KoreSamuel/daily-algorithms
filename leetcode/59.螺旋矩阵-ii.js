/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let step = 1;
  let temp = n;
  let t = 0, r = n - 1, b = n - 1; l = 0;
  let res = [];
  while (temp--) res[temp] = [];
  while (step <= n * n) {
    for (let i = l; i <= r; i++) res[t][i] = step++;
    t++;
    for (let i = t; i <= b; i++) res[i][r] = step++;
    r--;
    for (let i = r; i >= l; i--) res[b][i] = step++;
    b--;
    for (let i = b; i >= t; i--) res[i][l] = step++;
    l++;
  }
  return res;
};
// @lc code=end

