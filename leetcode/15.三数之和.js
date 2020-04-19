/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const res = [];
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] === nums[k - 1]) continue;

    let left = k + 1, right = nums.length - 1;
    while (left < right) {
      let temp = nums[k] + nums[left] + nums[right];
      if (temp > 0) {
        right--;
      } else if (temp === 0) {
        res.push([nums[k], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
// @lc code=end

