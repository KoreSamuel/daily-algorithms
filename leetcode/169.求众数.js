/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let len = nums.length;
  const o = {};
  for (const i in nums) {
    if (o[nums[i]]) {
      o[nums[i]] += 1;
    } else {
      o[nums[i]] = 1;
    }
    if (o[nums[i]] > len / 2) {
      return nums[i];
    }
  }
};
// majorityElement([3, 2, 2]);
