/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let temp = new Array(k).fill(Number.MAX_SAFE_INTEGER);
  let min = Number.MAX_SAFE_INTEGER;
  matrix.forEach(row => {
    row.forEach(cell => {
      if (min > cell || cell < temp[k - 1]) {
        temp = pushTemp(temp, cell);
        min = cell;
      }
    });
  });
  return temp[k - 1];
};
var pushTemp = function(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      arr.splice(i, 0, num);
      arr.pop();
      return arr;
    }
  }
  return arr;
};
// console.log(kthSmallest([[1, 2], [1, 3]], 1));
