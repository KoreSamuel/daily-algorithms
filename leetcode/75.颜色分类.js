/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0, cur = 0, r = nums.length - 1;
  let temp = 0;
  while (cur <= r) {
    if (nums[cur] === 0) {
      temp = nums[l];
      nums[l++] = nums[cur];
      nums[cur++] = temp;
    } else if (nums[cur] === 2) {
      temp = nums[cur];
      nums[cur] = nums[r];
      nums[r--] = temp;
    } else {
      cur++;
    }
  }
};
// @lc code=end

