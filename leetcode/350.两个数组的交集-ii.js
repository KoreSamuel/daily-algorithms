/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const m = {};
  const r = [];

  nums1.forEach(item => {
    if (m[item]) {
      m[item] += 1;
    } else {
      m[item] = 1;
    }
  });

  nums2.forEach(item => {
    if (m[item] && m[item] > 0) {
      r.push(item);
      m[item] -= 1;
    }
  });

  return r;
};
