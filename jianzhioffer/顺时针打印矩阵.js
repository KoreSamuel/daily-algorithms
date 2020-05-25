/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return [];
  const row = matrix.length, col = matrix[0].length;
  const len = row * col;
  let t = 0, r = col - 1, b = row - 1, l = 0;
  const res = [];
  while (res.length <= len) {
    for (let i = l; i <= r; i++) res.push(matrix[t][i]);
    t++;
    if (res.length === len) break;
    for (let i = t; i <= b; i++) res.push(matrix[i][r]);
    r--;
    if (res.length === len) break;
    for (let i = r; i >= l; i--) res.push(matrix[b][i]);
    b--;
    if (res.length === len) break;
    for (let i = b; i >= t; i--) res.push(matrix[i][l]);
    l++;
    if (res.length === len) break;
  }
  return res;
};
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))