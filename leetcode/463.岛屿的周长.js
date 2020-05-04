/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let cnt = 4;
        if (i > 0 && grid[i - 1][j] === 1) cnt--;
        if (i < grid.length - 1 && grid[i + 1][j] === 1) cnt--;
        if (j > 0 && grid[i][j - 1] === 1) cnt--;
        if (j < grid[i].length - 1 && grid[i][j + 1] === 1) cnt--;
        sum += cnt;
      }
    }
  }
  return sum;
};
// @lc code=end

