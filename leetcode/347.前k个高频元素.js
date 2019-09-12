/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前K个高频元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const hash = {};

  for (const i in nums) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }
  return Object.keys(hash)
    .sort((a, b) => hash[b] - hash[a])
    .slice(0, k);
};
