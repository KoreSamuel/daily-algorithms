/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let l = 0;
  let r = A.length - 1;
  while (l < r && A[l] < A[l + 1]) l++;
  if (l === 0 || l === r) return false;
  while (l < r && A[l] > A[l + 1]) l++;
  return l === r;
};
