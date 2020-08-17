/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const originColor = image[sr][sc];
  const dfs = (x, y) => {
    if (x < 0 || x >= image.length || y < 0 || y > image[0].length) return;
    if (image[x][y] === originColor) {
      image[x][y] = newColor;
      dfs(x - 1, y); // up
      dfs(x, y + 1); // right
      dfs(x + 1, y); // down
      dfs(x, y - 1); // left
    }
    return;
  };
  if (originColor !== newColor) {
    dfs(sr, sc);
  }
  return image;
};
// @lc code=end
