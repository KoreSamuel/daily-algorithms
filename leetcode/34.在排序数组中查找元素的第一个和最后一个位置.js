/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const res = [];
  let i = 0, j = nums.length - 1;
  let flag = [0, 0];
  while (i < j) {
    if (nums[i] === target && !flag[0]) {
      res.unshift(i);
      flag[0] = 1;
    } else {
      !flag[0] && i++;
    }

    if (nums[j] === target && !flag[1]) {
      res.push(j);
      flag[1] = 1;
    } else {
      !flag[1] && j--;
    }

    if (i === j && nums[i] === target) {
      return [i, i]
    }

    if (res.length === 2) {
      return res;
    }
  }
  if (res.length === 1) {
    return res.concat(res);
  }
  if (nums.length === 1 && nums[0] === target) {
    return [0, 0]
  }
  return [-1, -1];
};
searchRange([-3, -2, -1], 0)
// @lc code=end

