/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let [count, len] = [0, flowerbed.length];
  if (len == 1) {
    return (flowerbed.pop() === 0 && n === 1) || n === 0;
  }
  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0) {
        if (flowerbed[i + 1] === 0) {
          count++;
          flowerbed.splice(i, 1, 1);
        }
      } else if (i === len - 1) {
        if (flowerbed[i - 1] === 0) {
          count++;
          flowerbed.splice(i, 1, 1);
        }
      } else {
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          count++;
          flowerbed.splice(i, 1, 1);
        }
      }
    }
  }
  return count >= n;
};
// canPlaceFlowers([1, 0, 0, 0, 1], 2);
