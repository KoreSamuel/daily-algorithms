/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  const sum = A.reduce((acc, cur) => acc + cur, 0);
  if (sum % 3 !== 0) return false;
  const aver = sum / 3;
  let left = 0, right = A.length - 1;
  let sumLeft = A[left];
  let sumRight = A[right];
  while (left + 1 < right) {
    if (sumLeft === aver && sumRight === aver) {
      return true;
    }
    if (sumLeft !== aver) {
      sumLeft += A[++left]
    }
    if (sumRight !== aver) {
      sumRight += A[--right]
    }
  }
  return false;
};
// @lc code=end

