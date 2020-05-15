/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length;) {
      sum += nums[j];
      if (sum < k || sum > k) {
        j++;
      } else {
        count++;
        j++;
      }
    }
  }
  return count;
};
console.log(subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0))
// @lc code=end

