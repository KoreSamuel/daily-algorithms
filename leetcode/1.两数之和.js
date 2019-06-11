/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let idxb = -1;
  const idx = nums.findIndex((num, index) => {
    const b = target - num;
    idxb = nums.indexOf(b);
    return idxb !== -1 && idxb !== index;
  });
  return [idx, idxb];
};
