/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      if (i - hash[nums[i]] <= k) {
        return true;
      } else {
        hash[nums[i]] = i;
      }
    } else {
      hash[nums[i]] = i;
    }
  }
  return false;
};
