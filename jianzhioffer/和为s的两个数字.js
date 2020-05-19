/**
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 */

var twoSum = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    let s = nums[l] + nums[r];
    if (s === target) return [nums[l], nums[r]]
    if (s > target) r--;
    if (s < target) l++;
  }
  return [];
}


// 暴力法，超时
/* var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (nums.indexOf(temp) > -1) {
      return [nums[i], temp];
    }
  }
  return [];
} */