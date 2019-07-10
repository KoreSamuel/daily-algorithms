/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (n === 0) return 0;
  let sum = 1;
  let count = 1;
  while (n >= sum + count + 1) {
    count += 1;
    sum += count;
  }
  return count;
};
