/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const hash = {};
  const len = nums.length;
  let repeat = 0;
  let lost = 0;
  for (const i in nums) {
    if (hash[nums[i]]) {
      repeat = nums[i];
      break;
    } else {
      hash[nums[i]] = 1;
    }
  }
  lost = nums.reduce((acc, cur) => acc - cur, (len * (len + 1)) / 2 + repeat);
  return [repeat, lost];
};
// findErrorNums([1, 2, 2, 4]);
