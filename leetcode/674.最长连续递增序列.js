/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums.length) return 0;
  let [count, max, start] = [1, 1, nums[0]];
  for (let i = 1; i < nums.length; i++) {
    count = nums[i] > start ? count + 1 : 1;
    start = nums[i];
    if (count > max) {
      max = count;
    }
  }
  return max;
};
