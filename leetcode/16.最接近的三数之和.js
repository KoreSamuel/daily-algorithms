/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  if (len === 3) {
    return nums[0] + nums[1] + nums[2]
  }
  nums.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i <= len - 3; i++) {
    let curr = nums[i];
    let l = i + 1, r = len - 1;
    while (l < r) {
      let sum = curr + nums[l] + nums[r];
      let temp = Math.abs(sum - target);
      if (temp < min) {
        min = temp;
        res = sum;
      }
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        return sum;
      }
    }
  }
  return res;
};
// @lc code=end

