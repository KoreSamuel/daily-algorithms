/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let temp = new Array(k).fill(Number.MIN_SAFE_INTEGER);
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (max <= nums[i] || nums[i] >= temp[k - 1]) {
      temp = pushTemp(temp, nums[i]);
      max = nums[i];
    }
  }
  return temp[k - 1];
};
var pushTemp = function(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num >= arr[i]) {
      arr.splice(i, 0, num);
      arr.pop();
      return arr;
    }
  }
  return arr;
};
// console.log(findKthLargest([2, 1], 2));
