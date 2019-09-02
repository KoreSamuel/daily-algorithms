/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(a => a * a).sort((a, b) => a - b);
};
