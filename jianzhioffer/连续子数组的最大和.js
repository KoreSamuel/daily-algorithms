/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > sum + nums[i]) {
      sum = nums[i];
    } else {
      sum = sum + nums[i];
    }

    if (max < sum) {
      max = sum;
    }
  }

  return max;
};