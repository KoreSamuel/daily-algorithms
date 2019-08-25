/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  let hash = new Array(n).fill(false);
  for (let i = 2; i < n; i++) {
    if (!hash[i]) {
      count++;
      for (let j = 0; i * j < n; j++) {
        hash[i * j] = true;
      }
    }
  }
  return count;
};
// console.log(countPrimes(10));
