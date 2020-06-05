/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let idxA = 0, idxB = 0;
  const res = [];
  while (idxA < A.length && idxB < B.length) {
    let start = Math.max(A[idxA][0], B[idxB][0]);
    let end = Math.min(A[idxA][1], B[idxB][1]);
    if (start <= end) {
      res.push([start, end]);
    }
    A[idxA][1] > B[idxB][1] ? idxB++ : idxA++;
  }
  return res;
};
// @lc code=end

