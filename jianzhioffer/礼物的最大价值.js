/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  let r = grid.length, c = grid[0].length;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i === 0 && j === 0) {
        grid[i][j] = grid[i][j];
      }
      if (i === 0 && j !== 0) {
        grid[i][j] += grid[i][j - 1];
      }
      if (i !== 0 && j === 0) {
        grid[i][j] += grid[i - 1][j];
      }
      if (i !== 0 && j !== 0) {
        grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j])
      }
    }
  }
  return grid[r - 1][c - 1]
};