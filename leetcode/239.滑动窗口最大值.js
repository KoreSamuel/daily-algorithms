/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return [];
  const res = [];
  let maxidx = -1, max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= nums.length - k; i++) {
    if (maxidx >= i) {
      if (nums[i + k - 1] > max) {
        max = nums[i + k - 1];
        maxidx = i + k - 1;
      }
    } else {
      max = nums[i];
      for (let j = i; j < i + k; j++) {
        if (max < nums[j]) {
          max = nums[j];
          maxidx = j;
        }
      }
    }
    res[i] = max;
  }
  return res;
};
// @lc code=end

