/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let [max, left, right, temp] = [0, 0, height.length - 1, 0];
  while (left < right) {
    let hl = height[left];
    let hr = height[right];
    if (hl > hr) {
      temp = hr * (right - left);
      right--;
    } else {
      temp = hl * (right - left);
      left++;
    }
    max = max < temp ? temp : max;
  }
  return max;
};
