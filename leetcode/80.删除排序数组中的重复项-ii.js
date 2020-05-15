/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cnt = 1, idx = 1, len = nums.length;
  while (idx < len) {
    if (nums[idx - 1] === nums[idx]) {
      cnt++;
      if (cnt > 2) {
        remove(nums, idx);
        idx--;
        len--
      }
    } else {
      cnt = 1;
    }
    idx++;
  }
  return len;
};
function remove(arr, idx) {
  for (let i = idx + 1; i < arr.length; i++) {
    arr[i - 1] = arr[i]
  }
}
// @lc code=end

