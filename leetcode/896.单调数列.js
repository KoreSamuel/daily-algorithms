/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let inc = 1,
    dec = 1,
    len = A.length;
  for (let i = 0; i < len - 1; i++) {
    if (A[i] <= A[i + 1]) {
      inc++;
    }
    if (A[i] >= A[i + 1]) {
      dec++;
    }
  }
  return inc === len || dec === len;
};
