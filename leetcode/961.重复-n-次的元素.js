/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let right = A.length;
  let hash = {};
  while (right-- > 0) {
    if (hash[A[right]]) {
      hash[A[right]] = hash[A[right]] + 1;
    } else {
      hash[A[right]] = 1;
    }
    if (hash[A[right]] === A.length / 2) {
      return A[right];
    }
  }
};
// repeatedNTimes([1, 2, 3, 4, 4, 5, 4, 6, 4, 4]);
