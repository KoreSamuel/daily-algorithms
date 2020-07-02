/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  return [...A.filter(a => a % 2 === 0), ...A.filter(a => a % 2 !== 0)];
};

var sortArrayByParity = function (A) {
  let l = 0, r = A.length - 1;
  while (l < r) {
    if (A[l] % 2 > A[r] % 2) {
      let temp = A[l];
      A[l] = A[r];
      A[r] = temp;
    }

    if (A[l] % 2 === 0) l++;
    if (A[r] % 2 === 1) r--;
  }
  return A;
}