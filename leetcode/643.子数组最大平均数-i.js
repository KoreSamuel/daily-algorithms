/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let [sum, max, count, round] = [0, Number.MIN_SAFE_INTEGER, 0, 0];
  for (let i = 0; round <= nums.length - k; ) {
    sum += nums[i];
    count += 1;
    i += 1;
    if (count === k) {
      if (max < sum) {
        max = sum;
      }
      round += 1;
      i = round;
      sum = 0;
      count = 0;
    }
  }
  return max / k;
};
