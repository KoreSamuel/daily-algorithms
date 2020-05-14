/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
  const res = [];
  let temp = 0;
  for (let i = 0; i < A.length; i++) {
    temp = (temp << 1) + A[i];
    res.push(temp % 5 === 0);
    temp %= 10
  }
  return res;
};

