/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l !== r) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }
};
