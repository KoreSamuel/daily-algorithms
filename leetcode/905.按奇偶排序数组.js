/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  return [...A.filter(a => a % 2 === 0), ...A.filter(a => a % 2 !== 0)];
};
