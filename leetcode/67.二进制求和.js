/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const len = a.length > b.length ? a.length : b.length;
  let a1 = [...a],
    b1 = [...b];
  let result = [];
  let carry = 0;
  while (a1.length || b1.length) {
    let curA = +a1.pop() || 0;
    let curB = +b1.pop() || 0;
    let temp = curA + curB + carry;
    if (temp > 1) {
      result.unshift(temp % 2);
      carry = 1;
    } else {
      result.unshift(temp);
      carry = 0;
    }
  }
  if (carry) {
    result.unshift(1);
  }
  return result.join('');
};
