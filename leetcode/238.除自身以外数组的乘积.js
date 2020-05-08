/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];
  let k = 1;
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    res[i] = k;
    k *= nums[i];
  }
  k = 1;
  for (i = nums.length - 1; i >= 0; i--) {
    res[i] *= k;
    k *= nums[i];
  }
  return res;
};

// @lc code=end

