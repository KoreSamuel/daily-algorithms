/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  let l = 0;
  let r = A.length - 1;
  while (l <= r) {
    if (A[l] < A[l + 1]) {
      l++;
    }
    if (A[r] < A[r - 1]) {
      r--;
    }
  }
};
// 1,2,4,5,4,6,3,2
