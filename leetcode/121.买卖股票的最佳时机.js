/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }
  let minPrice = prices[0], max = 0;
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(max, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return max;
};
// 还可以推导成最大连续子数组求和
// @lc code=end

