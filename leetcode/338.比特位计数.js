/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let res = [];
  for (let i = 0; i <= num; i++) {
    res[i] = countOne(i);
  }
  return res;
};
var countOne = function(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
};
