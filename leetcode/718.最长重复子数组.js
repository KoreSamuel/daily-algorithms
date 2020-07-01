/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  let lenA = A.length, lenB = B.length;
  let res = 0;
  for (let i = 0; i < lenA; i++) {
    let len = Math.min(lenB, lenA - i);
    let maxLen = maxLength(A, B, i, 0, len);
    res = res > maxLen ? res : maxLen;
  }
  for (let i = 0; i < lenB; i++) {
    let len = Math.min(lenA, lenB - i);
    let maxLen = maxLength(A, B, 0, i, len);
    res = res > maxLen ? res : maxLen;
  }
  return res;
};
function maxLength(a, b, addA, addB, len) {
  let res = 0, k = 0;
  for (let i = 0; i < len; i++) {
    if (a[addA + i] === b[addB + i]) {
      k++;
    } else {
      k = 0;
    }
    res = res > k ? res : k;
  }
  return res;
}
// @lc code=end

