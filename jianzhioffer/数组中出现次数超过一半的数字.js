/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 */

/**
* @param {number[]} nums
* @return {number}
*/
var majorityElement = function (nums) {
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