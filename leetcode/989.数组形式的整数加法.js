/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let arrK = [...(K + '')].map(i => +i);
  let result = [];
  let carry = 0;
  while (A.length || arrK.length) {
    let curA = A.pop() || 0;
    let curB = arrK.pop() || 0;
    let temp = curA + curB + carry;
    if (temp > 9) {
      result.unshift(temp % 10);
      carry = 1;
    } else {
      result.unshift(temp);
      carry = 0;
    }
  }
  if (carry) {
    result.unshift(1);
  }
  return result;
};
